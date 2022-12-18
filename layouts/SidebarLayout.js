import { Layout, Typography } from '@douyinfe/semi-ui';
import styles from './SidebarLayout.module.css';

const { Header, Sider, Content } = Layout;

export function SidebarLayout({ children }) {
  return (
    <Layout className={styles.container}>
      <Header className={styles.header}>
        <Typography.Title>Pokemon Battle!</Typography.Title>
      </Header>
      <Layout className={styles.layout}>
        <Sider className={styles.sidebar}></Sider>

        <Content>
          <div className={styles.content}>{children}</div>
        </Content>
      </Layout>
    </Layout>
  );
}

