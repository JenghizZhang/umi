import { useDispatch, useSelector } from 'umi';

const Child3 = () => {
  const dispatch = useDispatch();
  const { dva } = useSelector((state) => ({ dva: state.dva }));
  return (
    <>
      <h3 className="title">子组件3</h3>
      <div>{dva}</div>
      <div>
        <button
          onClick={() => {
            dispatch({ type: 'global/setTitle', payload: { a: 11, b: 22 } });
          }}
        >
          修改全局model
        </button>
      </div>
    </>
  );
};

export default Child3;
