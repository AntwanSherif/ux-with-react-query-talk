import Head from 'next/head';
import Image from 'next/image';
import { SidebarLayout } from '@layouts/SidebarLayout';
import { PokemonsList } from '@components/PokemonsList';
import { usePokemons } from '@hooks/usePokemons';
import styles from '@styles/Home.module.css';

export default function Home() {
  const { pokemons, isSuccess, refetch } = usePokemons();

  return (
    <div className={styles.container}>
      <Head>
        <title>Pokemon Battle!</title>
        <meta name='description' content='Pokemon Battle!' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        {isSuccess ? (
          <PokemonsList pokemons={pokemons} onAdd={refetch} />
        ) : (
          <Image src='/loading.gif' alt='loading...' width={180} height={180} />
        )}
      </main>
    </div>
  );
}

Home.getLayout = function getLayout(page) {
  return <SidebarLayout>{page}</SidebarLayout>;
};

