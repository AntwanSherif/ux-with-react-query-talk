import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import styles from '@styles/SplashScreen.module.css';

export default function SplashScreen() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pokemon Battle!</title>
        <meta name='description' content='Pokemon Battle!' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Image className={styles.logo} src='/logo.png' alt='pokemon logo' width='300' height='100' priority />

      <Link href='/pokemons'>
        <Image className={styles.pokeball} src='/pokeball.png' alt='pokeball' width='100' height='100' priority />
      </Link>
    </div>
  );
}

