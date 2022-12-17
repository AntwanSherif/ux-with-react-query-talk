import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/Details.module.css';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Details() {
  const router = useRouter();
  const { id: pokemonId } = router.query;
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const getPokemon = async () => {
      const resp = await fetch(`https://jherr-pokemon.s3.us-west-1.amazonaws.com/pokemon/${pokemonId}.json`);
      const data = await resp.json();

      setPokemon(data);
    };

    getPokemon();
  }, [pokemonId]);

  if (!pokemon) return 'loading...';

  return (
    <div>
      <Head>
        <title>{pokemon.name}</title>
      </Head>
      <div>
        <Link href='/'>Back to Home</Link>
      </div>
      <div className={styles.layout}>
        <div>
          <Image
            className={styles.picture}
            src={`https://jherr-pokemon.s3.us-west-1.amazonaws.com/${pokemon.image}`}
            alt={pokemon.name}
            width={200}
            height={200}
            priority
          />
        </div>
        <div>
          <div className={styles.name}>{pokemon.name}</div>
          <div className={styles.type}>{pokemon.type?.join(', ')}</div>
          <table>
            <thead className={styles.header}>
              <tr>
                <th>Name</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              {pokemon.stats.map(({ name, value }) => (
                <tr key={name}>
                  <td className={styles.attribute}>{name}</td>
                  <td>{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

