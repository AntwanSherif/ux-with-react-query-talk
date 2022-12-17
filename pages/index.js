import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { rgbDataURL } from '../helpers/imagePlaceholder';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const getPokemon = async () => {
      const resp = await fetch('/api/pokemons');
      const data = await resp.json();

      setPokemons(data);
    };

    getPokemon();
  }, []);

  return (
    <>
      <Head>
        <title>Pokemon Battle!</title>
        <meta name='description' content='Pokemon Battle!' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className={styles.container}>
        <h1 className={styles.title}>Pokemon Battle!</h1>
        <main className={styles.main}>
          {!pokemons.length ? (
            'loading...'
          ) : (
            <div className={styles.grid}>
              {pokemons.map(pokemon => (
                <div className={styles.card} key={pokemon.id}>
                  <Link href={`/pokemon/${pokemon.id}`}>
                    <Image
                      placeholder='blur'
                      blurDataURL={rgbDataURL(2, 129, 210)}
                      src={`https://jherr-pokemon.s3.us-west-1.amazonaws.com/${pokemon.image}`}
                      alt={pokemon.name}
                      width={200}
                      height={200}
                    />
                    <h3>{pokemon.name}</h3>
                  </Link>
                </div>
              ))}
            </div>
          )}
        </main>
      </div>
    </>
  );
}

