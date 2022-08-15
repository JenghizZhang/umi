// 用mockjs模拟生成数据
var Mock = require('mockjs');

let mr = Mock.Random; //提取mock的随机对象

//随机id和图片
let mapData = (n) => {
  var data = [];

  for (var i = 1; i <= n; i++) {
    data.push({
      id: 1000 + i,
      title: '@ctitle(8,12)',
      des: '@csentence(10, 20)',
      time: '@integer(1553425967486,1553475967486)',
      detail: {
        auth: '@cname()',
        content: '@cparagraph(10,40)',
        auth_icon: mr.image('50x50', mr.color(), mr.cword(1)),
      },
    });
  }
  return data;
};

let mapData2 = (n) => {
  var data = [];

  for (var i = 1; i <= n; i++) {
    data.push({
      // 属性 id 是一个自增数，起始值为 1，每次增 1
      id: 1000 + i, //_id不支持 索引详情
      title: '@ctitle(4,8)', //标题型中文4到8个字
      sub_title: '@ctitle(6,12)',
      banner: mr.image('1680x745', mr.color(), mr.cword(4, 10)), //banner不变
      time: '@integer(1553425967486,1553475967486)',
      detail: {
        auth_icon: mr.image('50x50', mr.color(), mr.cword(1, 2)), //20X20尺寸
        auth: '@cname()', //百家姓
        content: '@cparagraph(10,40)', //正文
      },
    });
  }
  return data;
};
//json-server 要对象||函数(返回mock后的数据)
module.exports = {
  ...Mock.mock({
    home: mapData(100), //解决 auth_icon 不随机
    follow: mapData(80),
    column: mapData(60),
    banner: mapData2(10),
  }),
};
