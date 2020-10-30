import { defineConfig } from 'umi';
import routes from './config/routes';
import theme from './config/theme';

import postcssPx2vw from 'postcss-px-to-viewport';

const isProduction = process.env.NODE_ENV === 'production';

const chunks = isProduction ? ['common', 'vendors', 'umi'] : ['umi'];

export default defineConfig({
  base: '/',
  title: 'Umi Antd Mobile',
  publicPath: '/',
  nodeModulesTransform: {
    type: 'none',
  },
  extraPostCSSPlugins: [
    postcssPx2vw({
      viewportWidth: 750,
      unitPrecision: 3,
      viewportUnit: 'vw',
      minPixelValue: 1,
    }),
  ],
  extraBabelPlugins: [
    ['import', { libraryName: 'antd-mobile', libraryDirectory: 'es', style: true }, 'antd-mobile'],
  ],
  dva: {
    hmr: true,
    immer: true,
  },
  // proxy: {
  //   '/api': {
  //     target: 'https://xxx',
  //     changeOrigin: true,
  //     pathRewrite: { '^/api': '' },
  //   },
  // },
  routes,
  theme,
  // 提取公共依赖
  chunks,
  chainWebpack: function (config, { webpack, env }) {
    if (env === 'production') {
      // umi 的 hash 不够定制化
      config.output
        .filename('[name].[chunkhash].js')
        .chunkFilename('[name].[chunkhash].js');

      config.plugin('extract-css').tap((cfg) => {
        cfg[0].filename = '[name].[chunkhash].css';
        cfg[0].chunkFilename = '[name].[chunkhash].css';
        return [...cfg];
      });

      config.merge({
        optimization: {
          minimize: true,
          splitChunks: {
            chunks: 'all',
            cacheGroups: {
              common: {
                name: 'common',
                test({ resource }) {
                  return /[\\/]node_modules[\\/](lodash|bignumber|moment|react|react-dom).*$/.test(
                    resource,
                  );
                },
                priority: 15,
              },
              vendors: {
                name: 'vendors',
                test({ resource }) {
                  return /[\\/]node_modules[\\/]/.test(resource);
                },
                priority: 10,
              },
            },
          },
        },
      });
    }
  },
});
