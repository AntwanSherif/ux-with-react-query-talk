import Link from 'next/link';
import Image from 'next/image';
import { Typography } from '@douyinfe/semi-ui';
import styles from './Header.module.css';

export function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <Link href={`/`}>
          <Image className={styles.logo} src='/logo.png' alt='pokemon logo' width='500' height='184' priority />
        </Link>
      </div>

      <Typography.Text size='large' className={styles.total}>
        Total:
        <Typography.Text strong> 10</Typography.Text>
      </Typography.Text>
    </div>
  );
}

