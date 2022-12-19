import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardGroup, Typography } from '@douyinfe/semi-ui';
import { SidebarLayout } from '@layouts/SidebarLayout';
import { rgbDataURL } from '@helpers/imagePlaceholder';
import styles from '@styles/Home.module.css';

const { Text } = Typography;

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
    <>
      <Head>
        <title>Pokemon Battle!</title>
        <meta name='description' content='Pokemon Battle!' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        {!pokemons.length ? (
          'loading...'
        ) : (
          // <div className={styles.grid}>
          // {pokemons.map(pokemon => (
          //   <Link key={pokemon.id} href={`/pokemon/${pokemon.id}`}>
          //     <div className={styles.card}>
          //       <Image
          //         placeholder='blur'
          //         blurDataURL={rgbDataURL(2, 129, 210)}
          //         src={pokemon.image}
          //         alt={pokemon.name}
          //         width={180}
          //         height={180}
          //       />
          //       <h3>{pokemon.name}</h3>
          //     </div>
          //   </Link>
          // ))}
          // </div>

          <CardGroup spacing={30} className={styles.cardsGrid}>
            {pokemons.map(pokemon => (
              <Link key={pokemon.id} href={`/pokemon/${pokemon.id}`}>
                <Card
                  shadows='hover'
                  style={{ width: 200 }}
                  cover={
                    <Image
                      // placeholder='blur'
                      // blurDataURL={rgbDataURL(2, 129, 210)}
                      src={pokemon.image}
                      alt={pokemon.name}
                      width={200}
                      height={200}
                    />
                  }
                >
                  <Card.Meta title={pokemon.name} />
                  {/* <Text>{pokemon.name}</Text> */}
                </Card>
              </Link>
              // <Link key={pokemon.id} href={`/pokemon/${pokemon.id}`}>
              //   <div className={styles.card}>
              // <Image
              //   placeholder='blur'
              //   blurDataURL={rgbDataURL(2, 129, 210)}
              //   src={`https://jherr-pokemon.s3.us-west-1.amazonaws.com/${pokemon.image}`}
              //   alt={pokemon.name}
              //   width={180}
              //   height={180}
              // />
              //     <h3>{pokemon.name}</h3>
              //   </div>
              // </Link>
            ))}
          </CardGroup>
        )}
      </main>
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return <SidebarLayout>{page}</SidebarLayout>;
};

