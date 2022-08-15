import { Link } from 'umi';
function Login() {
  return (
    <>
      <div>Page Login</div>
      <Link to="/reg">注册</Link>
      <Link to="/user">用户</Link>
    </>
  );
}

export default Login;
