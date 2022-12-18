import { Layout } from '@douyinfe/semi-ui';
import { Header } from '@components/Header';
import { Sidebar } from '@components/Sidebar';
import styles from './SidebarLayout.module.css';

const { Content } = Layout;

export function SidebarLayout({ children }) {
  return (
    <Layout className={styles.container}>
      <Header />

      <Layout className={styles.layout}>
        <Sidebar />

        <Content>
          <div className={styles.content}>{children}</div>
        </Content>
      </Layout>
    </Layout>
  );
}

