import { memo } from 'react';
//memo 修饰当前组件 依赖父的数据变化时，才渲染

function Child2({ count2 }) {
  const show = () => console.log('child2组件渲染');
  return (
    <>
      <h3>Child2组件</h3>
      <div>{show()}</div>
      <div>{count2}</div>
    </>
  );
}
////memo 修饰当前组件 依赖父的数据变化时，才渲染
export default memo(Child2);

//不包装的情况下，父更新子更新
// export default Child2
