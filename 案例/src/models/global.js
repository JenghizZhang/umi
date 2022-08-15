import { history, request } from 'umi';
import key from 'keymaster';

export default {
  // namespace: 'global', //所有models里面的namespace不能重名 , 文件名即namespace名
  state: {
    title: '全局 title123',
    text: '全局text',
    login: false,
    a: '全局models aaaa',
  },
  reducers: {
    //处理同步 左key 接收dispatch({type:key
    setText(state) {
      return {
        ...state,
        text: '全局设置 后的text' + Math.random().toFixed(2),
      };
    },
    setTitle(state, action) {
      return {
        ...state,
        title: `全局设置 后的title${action.payload.a}/${action.payload.b}`,
      };
    },
    signin: (state) => ({
      ...state,
      login: true,
    }),
  },
  effects: {
    //处理异步 左key 等于dispatch({type:key
    //call：执行异步函数 并等待结果 类似 await
    // const result = yield call(fetch, '/todos');
    //put：发出一个 Action，给reducers
    //select: 从state里获取数据
    //const todos = yield select(state => state.todos);
    *login(action, { call, put, select }) {
      // console.log('*login action',action)
      const data = yield call(request, '/umi/login', {
        method: 'post',
        data: {
          username: action.payload.username,
          password: action.payload.password,
        },
      });
      // console.log('*login',data);

      yield put({
        type: 'signin',
      });

      // history.push('/');
      // yield put(routerRedux.push('/'));
    },

    *throwError(action, effects) {
      console.log(effects);
      throw new Error('全局effects 抛出的 error');
    },
  },
  subscriptions: {
    //场景： 时间、服务器的 websocket 连接、keyboard 输入、geolocation 变化、history 路由变化
    //订阅一个数据源 根据条件 dispatch 需要的 action
    //subsription中的方法名是随意定的，每次变化都会一次去调用里面的所有方法
    listenRoute({ dispatch, history }) {
      history.listen(({ pathname, query }) => {
        console.log('global subscriptions', pathname, query); //根据不同pathname加载不同数据发actions给reducers组件绑定state就好
      });
    },
    listenKeyboard({ dispatch }) {
      //监听键盘
      key('⌘+i, ctrl+i', () => {
        dispatch({ type: 'setText' });
      });
    },
    listenResize({ dispatch }) {
      //监听窗口变化
      window.onresize = function () {
        console.log('onresize');
      };
    },
    listenScroll({ dispatch, history, done }) {
      window.onscroll = function () {
        console.log('onscroll', done);
      };
    },
  },
};
