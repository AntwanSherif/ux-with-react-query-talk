import { useIsFetching } from '@tanstack/react-query';
import Link from 'next/link';
import Image from 'next/image';
import { IconCheckboxTick, IconSpin } from '@douyinfe/semi-icons';
import styles from './Header.module.css';

export function Header() {
  const isFetching = useIsFetching();

  return (
    <div className={styles.container}>
      <Link href='/pokemons'>
        <Image className={styles.logo} src='/logo.png' alt='pokemon logo' width='500' height='184' priority />
      </Link>

      {Boolean(isFetching) ? (
        <IconSpin spin style={{ color: 'white', fontSize: '1rem' }} />
      ) : (
        <IconCheckboxTick style={{ color: 'white', fontSize: '1.3rem' }} />
      )}
    </div>
  );
}

