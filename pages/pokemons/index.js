import Head from 'next/head';
import Image from 'next/image';
import { SidebarLayout } from '@layouts/SidebarLayout';
import { PokemonsList } from '@components/PokemonsList';
import { ErrorDisplay } from '@components/ErrorDisplay';
import { usePokemons } from '@hooks/usePokemons';
import styles from '@styles/Home.module.css';

export default function Home() {
  const { data: pokemons, isLoading, isError, error, refetch } = usePokemons();

  return (
    <div className={styles.container}>
      <Head>
        <title>Pokemon Battle!</title>
        <meta name='description' content='Pokemon Battle!' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        {isLoading ? (
          <Image src='/loading.gif' alt='loading...' width={180} height={180} />
        ) : isError ? (
          <ErrorDisplay error={error} />
        ) : (
          <PokemonsList pokemons={pokemons} onAdd={refetch} />
        )}
      </main>
    </div>
  );
}

Home.getLayout = function getLayout(page) {
  return <SidebarLayout>{page}</SidebarLayout>;
};

