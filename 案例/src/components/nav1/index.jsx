import { NavLink, history } from 'umi';
import { Badge, TabBar } from 'antd-mobile';
import {
  AppOutline,
  MessageOutline,
  MessageFill,
  UnorderedListOutline,
  UserOutline,
} from 'antd-mobile-icons';

const Nav1 = (props) => {
  const tabs = [
    {
      key: '/antd',
      title: 'UI',
      icon: <AppOutline />,
      badge: Badge.dot,
    },
    {
      key: '/goods',
      title: '路由',
      icon: <UnorderedListOutline />,
      badge: '5',
    },
    {
      key: '/resources',
      title: '资源',
      icon: (active) => (active ? <MessageFill /> : <MessageOutline />),
      badge: '99+',
    },
    {
      key: '/less',
      title: 'LESS',
      icon: <UserOutline />,
    },
    {
      key: '/hooks',
      title: 'hooks',
      icon: <UserOutline />,
    },
    {
      key: '/data-interaction',
      title: '数据请求',
      icon: <UserOutline />,
    },
    {
      key: '/dva',
      title: '数据流',
      icon: <UserOutline />,
    },
  ];

  return (
    <>
      <TabBar onChange={(key) => history.push(key)}>
        {tabs.map((item) => (
          <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
        ))}
      </TabBar>

      {/* <NavLink activeStyle={{color:'#399'}} to="/antd">antd</NavLink> / */}
      {/* <NavLink activeStyle={{color:'#399'}} to="/goods">路由</NavLink> / */}
      {/* <NavLink activeStyle={{color:'#399'}} to="/resources">资源引入</NavLink> / */}
      {/* <NavLink activeStyle={{color:'#399'}} to="/less">LESS</NavLink> / */}
      {/* <NavLink activeStyle={{color:'#399'}} to="/hooks">hooks</NavLink> / */}
      {/* <NavLink activeStyle={{color:'#399'}} to="/data-interaction">数据</NavLink> / */}
      {/* <NavLink activeStyle={{color:'#399'}} to="/dva">状态管理</NavLink> / */}
      {/* <NavLink activeStyle={{color:'#399'}} to="/start-config">运行时配置</NavLink> / */}

      {/* <NavLink activeStyle={{color:'#399'}} to="/user">用户</NavLink> / */}
      {/* <NavLink activeStyle={{color:'#399'}} to="/login">登录</NavLink> / */}
      {/* <NavLink activeStyle={{color:'#399'}} to="/reg">注册</NavLink> / */}
    </>
  );
};

export default Nav1;
