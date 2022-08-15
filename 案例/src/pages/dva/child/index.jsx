import { connect } from 'umi';
import Child2 from '../child2';

const Child = ({ dispatch, title, dva, a }) => (
  <>
    <h3 className="title">子组件内部访问models</h3>
    <p>全局title:{title}</p>
    <p>model.js数据:{dva}</p>
    <p>models目录数据:{a}</p>

    <div>
      <button
        onClick={() => {
          dispatch({ type: 'global/setTitle', payload: { a: 1, b: 2 } });
        }}
      >
        修改全局model
      </button>

      <button
        onClick={() => {
          dispatch({ type: 'dva/setStr' });
        }}
      >
        修改页面model
      </button>
      <Child2 />
    </div>
  </>
);

export default connect((state) => ({
  title: state.global.title,
  dva: state.dva,
  a: state.a,
}))(Child);
