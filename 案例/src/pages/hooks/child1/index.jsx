import { useContext } from 'react';
import AppContext from '../context';

function Child1() {
  const { msg, msg2, setMsg } = useContext(AppContext);
  return (
    <>
      <h3>后代组件</h3>
      <div>{msg}</div>
      <div>{msg2}</div>
      <button onClick={() => setMsg('改后123')}>修改上文</button>
    </>
  );
}
export default Child1;
