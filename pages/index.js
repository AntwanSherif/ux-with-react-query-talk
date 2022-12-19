import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { SidebarLayout } from '@layouts/SidebarLayout';
import { PokemonsList } from '@components/PokemonsList';
import styles from '@styles/Home.module.css';

export default function Home() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const getPokemon = async () => {
      const result = await fetch('/api/pokemons');
      const data = await result.json();

      setPokemons(data);
    };

    getPokemon();
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Pokemon Battle!</title>
        <meta name='description' content='Pokemon Battle!' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        {!pokemons.length ? (
          <Image src='/loading.gif' alt='loading...' width={180} height={180} />
        ) : (
          <PokemonsList pokemons={pokemons} />
        )}
      </main>
    </div>
  );
}

Home.getLayout = function getLayout(page) {
  return <SidebarLayout>{page}</SidebarLayout>;
};

