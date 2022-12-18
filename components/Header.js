import { Layout, Typography } from '@douyinfe/semi-ui';
import styles from './Header.module.css';

export function Header() {
  return (
    <Layout.Header className={styles.container}>
      <Typography.Title>Pokemon Battle!</Typography.Title>

      <Typography.Text>
        Total:
        <Typography.Text strong> 10</Typography.Text>
      </Typography.Text>
    </Layout.Header>
  );
}

