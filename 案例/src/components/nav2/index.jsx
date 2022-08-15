import { NavLink } from 'umi';
const Nav2 = (props) => {
  return (
    <>
      <div>
        <NavLink activeStyle={{ color: '#399' }} to="/goods/1">
          商品分类1
        </NavLink>
      </div>
      <div>
        <NavLink activeStyle={{ color: '#399' }} to="/goods/2">
          商品分类2
        </NavLink>
      </div>
      <div>
        <NavLink activeStyle={{ color: '#399' }} to="/goods/3">
          商品分类3
        </NavLink>
      </div>
      <div>
        <NavLink activeStyle={{ color: '#399' }} to="/goods/4">
          商品分类4
        </NavLink>
      </div>
    </>
  );
};

export default Nav2;
