export default [
  {
    path: '/',
    component: '@/layouts/MenuLayout',
    routes: [
      { path: '/', redirect: '/home' },
      {
        path: '/home',
        title: '首页',
        component: '@/pages/HomePage'
      },
    ]
  },
]
