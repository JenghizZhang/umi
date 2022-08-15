const jsonServer = require('json-server'); //在node里面使用json-server包
const db = require('./db.js'); //引入mockjs配置模块  需要暴露一个对象
const path = require('path');
const Mock = require('mockjs');

let port = 3333; //端口
let mock = '/mock'; //接口别名

//创建服务器
const server = jsonServer.create(); //创建jsonserver 服务对象  ~~ express()

//配置jsonserver服务器 中间件
server.use(
  jsonServer.defaults({
    static: path.join(__dirname, '/public'), //静态资源托管
  }),
);

server.use(jsonServer.bodyParser); //抓取body数据使用json-server中间件

//响应
server.use((request, res, next) => {
  //可选 统一修改请求方式
  // console.log(1)
  // request.method = 'GET';
  // 校验token
  next();
});

//登录注册校验 模拟db.js接口 ， 多出逻辑
let mr = Mock.Random; //提取mock的随机对象
server.post(mock + '/login', (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  username === 'alex' && password === 'alex123'
    ? res.jsonp({
        //json-server返回数据的一个api而已
        err: 0,
        msg: '登录成功',
        data: {
          follow: mr.integer(1, 5),
          fans: mr.integer(1, 5),
          nikename: mr.cname(),
          icon: mr.image('20x20', mr.color(), mr.cword(1)),
          time: mr.integer(13, 13),
          token: mr.integer(25),
        },
      })
    : res.jsonp({
        err: 1,
        msg: '登录失败',
      });
});
server.post(mock + '/reg', (req, res) => {
  let username = req.body.username;
  username !== 'alex'
    ? res.jsonp({
        err: 0,
        msg: '注册成功',
        data: {
          follow: mr.integer(0, 0),
          fans: mr.integer(0, 0),
          nikename: mr.cname(),
          icon: mr.image('20x20', mr.color(), mr.cword(1)),
          time: mr.integer(13, 13),
        },
      })
    : res.jsonp({
        err: 1,
        msg: '注册失败',
      });
});

//响应mock接口 自定义返回结构 定义mock接口别名

const router = jsonServer.router(db); //创建路由对象 db为mock接口路由配置  db==object

router.render = (req, res) => {
  //自定义返回结构
  let len = Object.keys(res.locals.data).length; //判断数据是不是空数组和空对象
  // console.log(len);

  setTimeout(() => {
    //模拟服务器延时
    res.jsonp({
      err: len !== 0 ? 0 : 1,
      msg: len !== 0 ? '成功' : '失败',
      data: res.locals.data,
    });
  }, 1000);

  // res.jsonp(res.locals.data)
};

server.use(
  jsonServer.rewriter({
    //路由自定义别名
    [mock + '/*']: '/$1',
    '/course_category\\?uid=:id': '/course_category/:id',
    '/posts/:category': '/posts?category=:category',
    '/articles\\?id=:id': '/posts/:id',
  }),
);

server.use(router); //路由响应

//开启jsonserver服务
server.listen(port, () => {
  console.log('mock server is running');
});
