import { useMemo, useState, useCallback, useEffect } from 'react';
import Child1 from './child1';
import Child2 from './child2';
import Child3 from './child3';
import AppContext from './context';

/**
 * 
 * useCallback和useMemo的参数跟useEffect一致，他们之间最大的区别有是useEffect会用于处理副作用，而前两个hooks不能。

  useMemo和useCallback都会在组件第一次渲染的时候执行，之后会在其依赖的变量发生改变时再次执行；并且这两个hooks都返回缓存的值，useMemo返回缓存的变量，useCallback返回缓存的函数。

  所有依赖本地状态或props来创建函数，需要使用到缓存函数的地方，都是useCallback的应用场景

  useCallback在什么场景使用: 将一个组件中的函数,传递给子元素进行回调使用时，使用useCallback对函数进行处理
 */

function Hooks() {
  const [msg, setMsg] = useState('hooks组件数据');
  const [msg2, setMsg2] = useState('hooks组件数据2');

  const [count, setCount] = useState(1);
  const [value, setValue] = useState('');

  const [count2, setCount2] = useState(1);
  const [value2, setValue2] = useState('');

  const [count3, setCount3] = useState(1);
  const [value3, setValue3] = useState('');

  function getNum() {
    console.log('getNum');
    return count * 100;
  }

  //函数只有在count变化时才调用，类似vue计算属性,对count重新计算，并缓存，返回缓存后的值,可拿去渲染
  //避免重复渲染
  const getNumMemo = useMemo(() => {
    console.log('getNum-useMemo');
    return count * 100;
  }, [count]);

  /* function updateCount3() {
    console.log("点击子，触发父");
    setCount3(count3+1)
  } */

  //没有参数2，每次都会执行
  //参数2==[] 执行一次
  //参数2==[数据] 依赖数据的变化执行
  const updateCount3 = useCallback(() => {
    console.log('点击子，触发父');
    setCount3(count3 + 1);
  }, [count3]);

  return (
    <AppContext.Provider value={{ msg, setMsg, msg2 }}>
      {/* 组件上下文共享，越级传递数据，响应式 */}
      <h3 className="title">useContext</h3>
      <h3>祖先组件</h3>
      <button onClick={() => setMsg('改后的hooks组件数据')}>修改msg</button>
      <button onClick={() => setMsg2('改后的hooks组件数据2')}>修改msg2</button>
      <Child1 />

      {/* 避免组件重复渲染，组件内函数变量重复调用,指定依赖数据变化才渲染或调用 */}
      <h3 className="title">useMemo</h3>

      {/* 组件任何一条数据变化，getNum函数重复调用 */}
      <div>getNum：{getNum()}</div>

      <div>getNumMemo：{getNumMemo}</div>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <div>Value: {value}</div>
      <input value={value} onChange={(ev) => setValue(ev.target.value)} />

      {/* 避免父更新，子更新 */}
      <h3 className="title">memo</h3>

      <button onClick={() => setCount2(count2 + 1)}>+1</button>
      <div>count2: {count2}</div>
      <div>value: {value2}</div>
      <input value={value2} onChange={(ev) => setValue2(ev.target.value)} />

      {/* count2 更新，子才更新，如果传递的属性值是个函数，memo失效，需要useCallBack */}
      <Child2 count2={count2} />

      <h3 className="title">useCallback</h3>

      <button onClick={() => setCount3(count3 + 1)}>+1</button>
      <div>count3: {count3}</div>
      <div>value3: {value3}</div>
      <input value={value3} onChange={(ev) => setValue3(ev.target.value)} />

      {/* 函数是引用，每次地址不一样，会导致子组件更新 */}
      {/* <Child3 count3={count3}  updateCount3={()=>{console.log('...')}} /> */}

      <Child3 updateCount3={updateCount3} />

      <h3 className="title">useLayoutEffect</h3>
      <h3>useLayoutEffect执行时机早于类组件</h3>
      <h3>useEffect执行时机晚于类组件</h3>
      <span>挂载时</span>
      <p>类render → 函数render → useLayoutEffect→ 类didmount → useEffect</p>
      <span>更新时</span>
      <p>
        类render渲染 → 函数render → useLayoutEffect 销毁→ useLayoutEffect 执行→
        类didUpdate → useEffect 销毁… → useEffect 执行
      </p>
    </AppContext.Provider>
  );
}

// Hooks.wrappers = ['@/wrappers/auth']; 配置路由情况下无效

export default Hooks;
