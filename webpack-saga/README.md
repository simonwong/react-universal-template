# React 通用模板 #

## 使用 ##

```
git clone https://github.com/simonjayw/react-universal-template

cd react-universal-template

npm install

npm start
```

## 技术栈 ##

- react
- react-router
- redux
- redux-saga
- axios
- sass、postcss

## 依赖项解释 ##

- babel-cli 通过命令行操作来编译文件
- babel-eslint 使得eslint可以理解最新的语法。eslintrc中配置`"parser": "babel-eslint"`
- babel-loader 转化es6代码 // 升级到8之后，关联的包使用变了

> webpack 4.x | babel-loader 8.x | babel 7.x

```bash
npm install -D babel-loader @babel/core @babel/preset-env webpack
```

> webpack 4.x | babel-loader 7.x | babel 6.x

```bash
npm install -D babel-loader@7 babel-core babel-preset-env webpack
```

- @babel/plugin-transform-runtime
- @babel/preset-env
- @babel/preset-react
- @babel/plugin-proposal-class-properties 不再使用preset-stage-x

- eslint-config-airbnb Airbnb可能是最严格的代码规范
- eslint-plugin-babel
- eslint-plugin-react 支持react语法检测
- eslint-plugin-jsx-a11y 支持jsx检测
- postcss-loader
- autoprefixer css兼容处理
- react-hot-loader 热加载
- html-webpack-plugin 
- clean-webpack-plugin 
- webpack
- webpack-cli 4.0开始命令行放在这里了
- webpack-merge 合并webpack配置

## 参考 ##

> - axios配置参考[easy-mock](https://github.com/easy-mock/easy-mock/blob/dev/views/api/index.js)
> - store的配置[React+Redux项目结构最佳实践](https://www.jianshu.com/p/34468f13263c)
> - [Ant Design](https://github.com/ant-design/ant-design/)
> - [多技术栈前端项目模板](https://github.com/wxyyxc1992/fe-boilerplate)
