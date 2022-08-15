import { defineConfig } from 'umi';
import routes from './routes';
import theme from './theme';

export default defineConfig({
  nodeModulesTransform: {
    // node_modules目录下依赖文件
    type: 'none', //如果是all兼容性更好但慢
  },
  routes,
  fastRefresh: {}, //快速编译，可以保持state，同时提供实时反馈
  devServer: {
    port: 8081, //.env里面权限更高一些
    // https:true, //启动https安全访问，于对应协议服务器通讯
  },
  title: 'UMI3', //配置标题
  // favicon: '线上或者本地的地址'
  favicon: '/icon.ico', // 本地图片放在public中
  dynamicImport: {
    //按需加载
    loading: '@/components/loading', //按需加载时指定loading组建
  },
  mountElementId: 'app', //指定react根id

  theme,
});
