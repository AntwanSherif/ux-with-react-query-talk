import Image from 'next/image';
import { Layout, Typography } from '@douyinfe/semi-ui';
import styles from './Header.module.css';

export function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <Image className={styles.logo} src='/logo.png' alt='pokemon logo' width='500' height='184' priority />
      </div>

      <Typography.Text>
        Total:
        <Typography.Text strong> 10</Typography.Text>
      </Typography.Text>
    </div>
  );
}

