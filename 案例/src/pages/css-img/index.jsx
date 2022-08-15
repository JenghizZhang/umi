import styles from './index.css';
import user from '../../assets/images/userBj.png';

function CssImg(props) {
  return (
    <div>
      {/* global.less样式 */}
      <h3 className={`title`}>静态图片</h3>

      <img src={user} />
      <img src={require('../../assets/images/userBj.png')} alt="" />

      {/* 模块化私有样式 */}
      <h3 className={styles.title}>动态图片</h3>

      {/*动态图片 丢到服务器 推荐*/}

      {/*指向public */}
      <img src="/img/bg.jpg" width="100" alt="" />

      <h3 className={`title`}>行间样式</h3>
      <div className={styles.test1} style={{ height: 50 }}>
        测试
      </div>
    </div>
  );
}

export default CssImg;
