import { memo } from 'react';
//memo 修饰当前组件 依赖父的数据变化时，才渲染

function Child3({ count3, updateCount3 }) {
  const show = () => console.log('child3组件渲染');
  return (
    <>
      <h3>Child3组件</h3>
      <div>{show()}</div>
      <div>{count3}</div>
      <button onClick={updateCount3}>更新父count</button>
    </>
  );
}
////memo 修饰当前组件 依赖父的数据变化时，才渲染
export default memo(Child3);

//不包装的情况下，父更新子更新
// export default Child3
