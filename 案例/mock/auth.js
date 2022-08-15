export default {
  // 支持自定义函数，API 参考 express@4
  // 处理接口的相关业务在函数内部自行完成，如：介权
  'GET /umi/auth': (req, res) => {
    res.send({
      isLogin: true,
    });
  },
  'GET /umi/menus': (req, res) => {
    res.send([
      {
        path: '/',
        component: 'layouts/layout1',
        routes: [
          {
            title: '资源引入',
            path: '/resources',
            component: 'pages/css-img',
          },
          { path: '/less', component: 'pages/less' },
          {
            path: '/goods',
            component: 'layouts/layout2',
            routes: [
              { path: '/goods/:id?', component: 'pages/goods/goods-detail' },
              {
                path: '/goods/:id/comment',
                component: 'pages/goods/comment',
              },
              {
                path: '/goods/:id/comment/:cid',
                component: 'pages/goods/comment/comment-detail',
              },
              { component: 'pages/404' },
            ],
          },
          { path: '/data-interaction', component: 'pages/data-interaction' },
          { path: '/dva', component: 'pages/dva' },
          { path: '/antd', component: 'pages/antd' },
          { path: '/hooks', component: 'pages/hooks' },
          {
            path: '/user',
            component: 'pages/user',
            wrappers: ['wrappers/auth'],
          },

          { path: '/', redirect: '/antd' },
          { component: 'pages/404' },
        ],
      },
      { component: 'pages/404' },
    ]);
  },
  'POST /umi/login': (req, res) => {
    const { username, password } = req.body;
    if (username === 'alex' && password === 'alex123') {
      res.send({
        err: 0,
        msg: '成功',
        currentAuthority: 'user',
      });
    } else if (username === 'admin' && password === 'admin123') {
      res.send({
        err: 0,
        msg: '成功',
        currentAuthority: 'admin',
      });
    } else {
      res.send({
        err: 1,
        msg: '失败',
      });
    }
  },
};
