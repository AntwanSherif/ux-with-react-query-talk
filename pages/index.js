import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardGroup } from '@douyinfe/semi-ui';
import { SidebarLayout } from '@layouts/SidebarLayout';
import { rgbDataURL } from '@helpers/imagePlaceholder';
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
          <Image src='/loading.gif' alt='loading...' width={200} height={200} />
        ) : (
          <CardGroup spacing={30} className={styles.cardsGrid}>
            {pokemons.map(pokemon => (
              <Link key={pokemon.id} href={`/pokemon/${pokemon.id}`}>
                <Card
                  shadows='hover'
                  className={styles.card}
                  cover={
                    <Image
                      placeholder='blur'
                      blurDataURL={rgbDataURL(220, 220, 220)}
                      src={pokemon.image}
                      alt={pokemon.name}
                      width={200}
                      height={200}
                    />
                  }
                >
                  <Card.Meta title={pokemon.name} />
                </Card>
              </Link>
            ))}
          </CardGroup>
        )}
      </main>
    </div>
  );
}

Home.getLayout = function getLayout(page) {
  return <SidebarLayout>{page}</SidebarLayout>;
};

