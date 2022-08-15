import { defineConfig } from 'umi';
import proxy from './proxy';
import routes from './routes';
import theme from './theme';

export default defineConfig({
  // layout: {},

  /* history: {
    type:'hash'
  }, */

  nodeModulesTransform: {
    // node_modules 目录下依赖文件的编译方式
    type: 'none', // all 慢 兼容性好 none 快 兼容性一般
  },

  // mfsu: {},//打包提速
  fastRefresh: {}, //快速刷新 可以保持组件状态，同时编辑提供即时反馈

  title: 'UMI3', //配置标题。

  mountElementId: 'app', //指定 react app 渲染到的 HTML 元素 id。

  request: {
    dataField: '',
  },

  favicon: '/favicon.ico', //使用本地的图片，图片请放到 public 目录

  routes: routes,

  proxy: proxy, //配置反向代理

  //启用按需加载
  dynamicImport: {
    loading: '@/components/loading', //按需加载时指定的loading组件
  },

  theme, //配置主题，实际上是配 less 变量。
  devServer: {
    port: 8666, // .env里面权限更高一些
    // https:true,//启用https安全访问，于对应协议服务器通讯
  },

  dva: {
    // immer: true,
    hmr: true,
  },
});
