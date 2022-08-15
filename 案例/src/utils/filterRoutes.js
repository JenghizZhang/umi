//动态路由地址要require引入
// require(需要字符拼接+变量)
// document.ejs报错，需要找到index.jsx

const filterRoutes = (routesData) => {
  routesData.map((item) => {
    if (item.routes && item.routes.length > 0) {
      filterRoutes(item.routes);
    } else {
      item.exact = true;
    }
    if (!item.redirect) {
      if (item.component.includes('404')) {
        item.component = require('@/' + item.component + '.jsx').default;
      } else {
        item.component = require('@/' + item.component + '/index.jsx').default;
      }
      if (item.wrappers && item.wrappers.length > 0) {
        item.wrappers.map((str, index) => {
          item.wrappers[index] = require('@/' + str + '.jsx').default;
        });
      }
    }
  });
};
export { filterRoutes };
