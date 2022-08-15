import { connect } from 'umi';
import Child3 from '../child3';

const Child2 = ({ dispatch, ...rest }) => (
  <>
    <h3 className="title">子组件2</h3>
    {JSON.stringify(rest)}
    <div>
      <button
        onClick={() => {
          dispatch({ type: 'global/setTitle', payload: { a: 11, b: 22 } });
        }}
      >
        修改全局model
      </button>
    </div>
    <Child3 />
  </>
);

export default connect()(Child2);
