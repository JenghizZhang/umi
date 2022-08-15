//方案: 原生fetch
//方案: axios
//方案: useRequest 钩子
//方案: umi-request
import { useRequest, request, useState } from 'umi';
import axios from 'axios';

const DataInteraction = (props) => {
  //jsonserver 无需代理支持跨域 | umimock也是如此
  // const { data, error, loading } = useRequest(() => request('http://localhost:3333/home'));
  const { data, error, loading } = useRequest(() => request('/umi/goods')); //umimock 读不到？

  //真实服务器需要代理
  // const { data, error, loading } = useRequest(() => request('/api/goods/home',{params:{_limit:2}}));

  console.log('useRequest error', error);
  console.log('useRequest loading', loading);
  console.log('useRequest data', data);

  const getData1 = async () => {
    // let res = await fetch('/umi/goods?_limit=1');  //umi mock不支持resfulApi?

    let res = await fetch('/umi/login', {
      method: 'post',
      headers: { 'Content-type': 'application/x-www-form-urlencoded' },
      body: 'username=alex&password=alex123',
    });

    // let res = await fetch('/umi/goods/home?_limit=3'); //umi mock不支持resfulApi?

    let data = await res.json();
    console.log(data);
  };

  const getData2 = async () => {
    // let res=await axios({url:'/api/goods/home',params:{_limit:3}})
    let res = await axios({ url: '/umi/goods', params: { _limit: 1 } });
    console.log(res.data);
  };

  const getData3 = async () => {
    let res = await request('/umi/goods', { params: { _limit: 1 } });
    // let res = await request('/api/goods/home',{params:{_limit:1}})
    console.log(res);
  };

  return (
    <>
      <h3 className="title">数据mock|真实接口</h3>
      <p>umi的看mock目录的配置|真实接口config配置proxy|jsonserver</p>

      <h3 className="title">原生fetch</h3>
      <button onClick={getData1}>测试</button>

      <h3 className="title">axios</h3>
      <button onClick={getData2}>测试</button>

      <h3 className="title">umi-request</h3>
      <button onClick={getData3}>测试</button>

      <h3 className="title">useRequest</h3>
    </>
  );
};

export default DataInteraction;
