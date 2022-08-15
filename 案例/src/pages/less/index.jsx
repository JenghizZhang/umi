import styles from './index.less';
function Less() {
  return (
    <div>
      <h2 className="title">变量</h2>
      <div className={styles.header}>测试</div>

      <h2 className="title">混合</h2>

      <div id={styles.a1}>测试1</div>
      <p></p>
      <div className={styles.a2}>测试2</div>

      <hr />

      <h2 className="title">嵌套</h2>
      <div className={styles.nesting}>
        <h3>测试</h3>
        <p>测试</p>
      </div>

      <h2 className="title">父选择器&</h2>

      <div>
        <h3 className={styles.parent}>测试</h3>
        <p>测试</p>
      </div>

      <h2 className="title">:global</h2>

      <div className={styles.bars_right}>
        <p>
          在React项目中，样式语言无论是用scss或less，如果想让 样式
          仅作用在某个组件，而不影响全局，一般都会把样式文件进行模块化，
          即打包后每个class名都会被自动加上一串唯一的序列号,在编译后模块化样式都会加上序号，global可使后面的样式编译后没有序号,脱离模块化，作用到全局，调用方式为非模块化
        </p>
        <button className={`ant-btn`}>按钮</button>
      </div>
    </div>
  );
}
Less.title = 'less'; //约定式有效，配置式出现无效
export default Less;
