import React from 'react';
import { SpinLoading } from 'antd-mobile';
import styles from './index.less';

export default () => {
  return (
    <div className={styles.loading}>
      <SpinLoading color="primary" />
    </div>
  );
};
