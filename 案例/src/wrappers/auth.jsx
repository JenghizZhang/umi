import { Redirect } from 'umi';

export default (props) => {
  if (Math.random() < 0.5) {
    return <div>{props.children}</div>;
  } else {
    return <Redirect to="/login" />;
  }
};
