import Nav2 from '../../components/nav2';
import styles from './index.less';
const Layout2 = (props) => {
  return (
    <div className={styles.layout2_wrap}>
      <div className={styles.layout2_nav}>
        <Nav2 />
      </div>
      <div className={styles.layout2_content}>{props.children}</div>
    </div>
  );
};

export default Layout2;
