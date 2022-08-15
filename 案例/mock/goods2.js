import { delay } from 'roadhog-api-doc'; // 模拟延时

export default delay(
  {
    // 支持值为 Object 和 Array
    '/umi/goods2': [
      { id: 1, name: '韭菜' },
      { id: 2, name: '西红柿' },
    ],
  },
  2000,
); //延时
