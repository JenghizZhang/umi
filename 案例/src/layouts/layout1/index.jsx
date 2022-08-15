import Nav1 from '../../components/nav1';
import styles from './index.less';
const Layout1 = (props) => {
  return (
    <>
      {props.children}
      <div className={styles['adm-tab-bar']}>
        <Nav1 />
      </div>
    </>
  );
};

export default Layout1;
