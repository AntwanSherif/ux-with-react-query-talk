import { Layout, Typography } from '@douyinfe/semi-ui';
import styles from '@styles/App.module.css';
import '@styles/globals.css';

const { Header, Sider, Content } = Layout;

export default function App({ Component, pageProps }) {
  return (
    <Layout className={styles.container}>
      <Header className={styles.header}>
        <Typography.Title>Pokemon Battle!</Typography.Title>
      </Header>
      <Layout className={styles.layout}>
        <Sider className={styles.sidebar}></Sider>

        <Content>
          <div className={styles.content}>
            <Component {...pageProps} />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}

