export default [
  { path: '/login', component: 'login' }, // 不写路径从 src/pages找组件
  { path: '/reg', component: './reg' }, //当前指向pages

  /* {
    path: '/',
    // component: '@/layouts/layout1',//@别名指向src
    component: '../layouts/layout1',
    routes: [
      //通常在需要为多个路径增加 layout 组件时使用（配子路由，并提供展示区）
      { title: '资源引入', path: '/resources', component: 'css-img' },
      { path: '/less', component: 'less' },
      {
        path: '/goods',
        component: '@/layouts/layout2', //展示区
        routes: [
          // { path: '/goods', component: 'goods' },
          // { path:'/goods', redirect: '/goods/2' },//这里的
          { path: '/goods/:id?', component: 'goods/goods-detail' }, //动态可选路由
          { path: '/goods/:id/comment', component: 'goods/comment' }, //不配routes,占用当前展示区
          {
            path: '/goods/:id/comment/:cid',
            component: 'goods/comment/comment-detail',
          },
          { component: '@/pages/404' },
        ],
      },
      { path: '/data-interaction', component: 'data-interaction' },
      { path: '/dva', component: 'dva' },
      { path: '/antd', component: 'antd' },
      { path: '/hooks', component: 'hooks' },
      { path: '/user', component: 'user', wrappers: ['@/wrappers/auth'] }, //路由守卫

      { path: '/', redirect: '/antd' },
      { component: '@/pages/404' },
    ],
  },

  { component: '@/pages/404' }, */
];
