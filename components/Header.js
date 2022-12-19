import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';

export function Header() {
  return (
    <div className={styles.container}>
      <Link href='/'>
        <Image className={styles.logo} src='/logo.png' alt='pokemon logo' width='500' height='184' priority />
      </Link>
    </div>
  );
}

