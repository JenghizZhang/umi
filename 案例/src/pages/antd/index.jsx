import { Button as MButton } from 'antd';
import { Button } from 'antd-mobile'; //默认v2 v5不可用
import { Button as OButton } from 'antd-mobile-v2'; //默认v2 v5不可用

function Antd() {
  return (
    <>
      <div>Page Antd</div>
      <MButton type="primary">Primary Button</MButton>
      <ul>
        <li>内置 antd，目前内置版本是 ^4.0.0</li>
        <li>基于 babel-plugin-import 做按需编译</li>
        <li>import xx from 'antd' 方式引入使用</li>
        <li>使用其他版本：在项目中显式安装 antd 依赖。</li>
        <li>主题设置：查看config目录</li>
      </ul>

      <div>page antdm1</div>
      <OButton inline type="primary" size="small">
        v2
      </OButton>
      <Button size="mini" color="primary">
        v5
      </Button>
      <p>
        如果你的项目中依赖了 @umijs/preset-react （可以在 package.json
        文件中看到），那么请把它升级到最新版
      </p>
    </>
  );
}

export default Antd;
