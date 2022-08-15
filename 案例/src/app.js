import { request as http, history } from 'umi';
import { filterRoutes } from './utils/filterRoutes';

let routesData = [];

export function patchRoutes({ routes }) {
  //动态添加路由
  console.log('pathroutes', routes);

  /*   routes.push({
    path: '/',
    component: require('@/layouts/layout1').default,
    routes: [
      {
        exact: true,
        title: '资源引入',
        path: '/resources',
        component: require('@/pages/css-img').default,
      },
      {
        exact: true,
        path: '/less',
        component: require('@/pages/less').default,
      },
      {
        path: '/goods',
        component: require('@/layouts/layout2').default, //展示区
        routes: [
          {
            exact: true,
            path: '/goods/:id?',
            component: require('@/pages/goods/goods-detail').default,
          },
          {
            exact: true,
            path: '/goods/:id/comment',
            component: require('@/pages/goods/comment').default,
          },
          {
            exact: true,
            path: '/goods/:id/comment/:cid',
            component: require('@/pages/goods/comment/comment-detail').default,
          },
          { exact: true, component: require('@/pages/404').default },
        ],
      },
      {
        exact: true,
        path: '/data-interaction',
        component: require('@/pages/data-interaction').default,
      },
      {
        exact: true,
        path: '/dva',
        component: require('@/pages/dva').default,
      },
      {
        exact: true,
        path: '/antd',
        component: require('@/pages/antd').default,
      },
      {
        exact: true,
        path: '/hooks',
        component: require('@/pages/hooks').default,
      },
      {
        exact: true,
        path: '/user',
        component: 'user',
        wrappers: [require('@/wrappers/auth').default],
      }, //路由守卫

      { exact: true, path: '/', redirect: '/antd' },
      { exact: true, component: require('@/pages/404').default },
    ],
  });
  routes.push({ exact: true, component: require('@/pages/404').default }); */
  filterRoutes(routesData);
  routesData.map((item) => routes.push(item));
  console.log('patchRoutes', routes);
}

export const render = async (oldRender) => {
  //只运行首次
  /* console.log(
    'render 渲染之前做一些权限校验，读取路由数据，在patchRoutes之前运行，',
  ); */

  const { isLogin } = await http('/umi/auth');
  if (isLogin) {
    //获取路由数据
    routesData = await http('/umi/menus');
    // console.log(111, routesData);
  } else {
    history.push('/login');
  }

  // oldRender， Function，原始 render 方法，需至少被调用一次
  oldRender();

  /* fetch('/api/auth').then(auth => {
    if (auth.isLogin) { 获取路由数据 let routesData = auth.routes;oldRender() }
    else { history.push('/login'); }
  }); */
};

export function onRouteChange({ matchedRoutes, location, routes, action }) {
  console.log('routes', routes); //路由集合
  console.log('matchedRoutes', matchedRoutes); //当前匹配的路由及其子路由
  console.log('location', location); //location及其参数
  console.log('action', action); //当前跳转执行的操作
  // console.log('初始加载和路由切换时的逻辑')
  //初始加载和路由切换时的逻辑,用于路由监听, action 是路由切换方式如：push
  //用于做埋点统计
  //动态设置标题
  document.title =
    matchedRoutes[matchedRoutes.length - 1].route.title || 'heheda';
}
export const request = {
  // timeout: 1000,
  // errorConfig: {},
  // middlewares: [],
  requestInterceptors: [
    (url, options) => {
      // 请求地址 配置项
      options.headers = {
        token:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFsZXgiLCJfaWQiOiI1ZThhMGQ2MzczNDg2MDIzYTRmZDY4ZGYiLCJpYXQiOjE1ODkxMDQ4NjcsImV4cCI6MTU4OTE5MTI2N30.e0GWBDhYILXOuCpoCXq75T4PeBiNFgSab54sMe6yTk4',
      };
      // console.log('请求地址 配置项');
      return { url, options };
    },
  ],
  responseInterceptors: [
    (response, options) => {
      //响应体 请求时的配置项
      // console.log('响应体 请求时的配置项');
      return response;
    },
  ],
};
