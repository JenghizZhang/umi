import { connect, getDvaApp } from 'umi';
import Child from './child';

const Dva = (props) => {
  return (
    <>
      <h3 className="title">获取全局 state </h3>

      <div>text:{props.text}</div>
      <div>title:{props.title}</div>
      <div>a:{props.A}</div>
      {props.isLogin ? <div>已登录</div> : <div>未登录</div>}

      <h3 className="title">修改全局 state</h3>
      <button
        onClick={() => {
          props.dispatch({
            type: 'global/setText',
          });
        }}
      >
        修改全局text,不传参
      </button>

      <button
        onClick={() => {
          props.dispatch({
            type: 'global/setTitle',
            payload: { a: 1, b: 2 },
          });
        }}
      >
        修改全局text,传参
      </button>

      <button
        onClick={() =>
          props.dispatch({
            type: 'global/login',
            payload: {
              username: 'alexx',
              password: 'alexx123',
            },
          })
        }
      >
        发送effect异步处理请求
      </button>

      <button
        onClick={() => {
          props.dispatch({
            type: 'global/throwError',
          });
        }}
      >
        抛出全局错误
      </button>

      <button
        onClick={() => {
          console.log('store', getDvaApp());
        }}
      >
        访问到 store
      </button>

      <h3 className="title">subscriptions全局model测试</h3>
      <p>跳转路由=》触发listenRoute</p>
      <p>敲击键盘ctrl+i =》触发 listenKeyboard</p>
      <p>修改窗口大小 =》触发 listenResize</p>
      <p>滚动浏览器 =》触发 listenScroll</p>

      <h3 className="title">获取页面models</h3>
      <p>model.js里面的数据:{props.dva}</p>
      <p>models目录里面的的数据:{props.a}</p>
      <p>models目录里面的的数据:{props.b}</p>
      <hr />

      <h3 className="title">修改页面model数据</h3>
      <button onClick={() => props.dispatch({ type: 'dva/setStr' })}>
        修改
      </button>

      <Child />
    </>
  );
};

export default connect((state) => ({
  //抓取全局,重命名
  // pathname: state.routing.location.pathname,
  text: state.global.text,
  title: state.global.title,
  A: state.global.a,
  isLogin: state.global.login,

  //抓取页面级别,重命名
  dva: state.dva,
  a: state.a,
  b: state.b,
}))(Dva);
