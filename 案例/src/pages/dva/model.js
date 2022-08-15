//页面下如果没有多个model模块，可以只出现model.js 而不用models/a|b|...
export default {
  namespace: 'dva', //测试页面model名是文件名，如需自定义，指定namespace
  state: 'bmw', // dva='bmw'
  reducers: {
    setStr(state) {
      return 'qq';
    },
  },
};
