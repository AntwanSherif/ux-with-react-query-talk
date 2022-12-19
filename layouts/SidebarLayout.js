import { Layout } from '@douyinfe/semi-ui';
import { Header } from '@components/Header';
import { Sidebar } from '@components/Sidebar';
import styles from './SidebarLayout.module.css';

const { Content } = Layout;

export function SidebarLayout({ children }) {
  return (
    <div>
      <Layout.Header className={styles.header}>
        <Header />
      </Layout.Header>

      <Layout className={styles.container}>
        <Layout className={styles.body}>
          <Sidebar />

          <Content>
            <div className={styles.content}>{children}</div>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}

