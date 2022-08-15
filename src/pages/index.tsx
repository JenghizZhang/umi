import styles from './index.less';
import { Button } from 'antd';
// @ts-ignore
import Child from './child';

export default function IndexPage() {
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <Button type="primary">按钮</Button>
      <Child></Child>
    </div>
  );
}
