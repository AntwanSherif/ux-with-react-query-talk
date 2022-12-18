import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { IconChevronLeft } from '@douyinfe/semi-icons';
import { Skeleton, TagGroup } from '@douyinfe/semi-ui';
import styles from '@styles/Details.module.css';
import { SidebarLayout } from '@layouts/SidebarLayout';

const skeletonPokemon = { name: '', image: '' };

export default function Details() {
  const router = useRouter();
  const { id: pokemonId } = router.query;
  const [pokemon, setPokemon] = useState(skeletonPokemon);
  const [loading, setLoading] = useState(Object.is(pokemon, skeletonPokemon));

  useEffect(() => {
    const getPokemon = async () => {
      const result = await fetch(`/api/pokemon/${pokemonId}`);
      const data = await result.json();

      setPokemon(data);
      setLoading(false);
    };

    if (pokemonId) {
      getPokemon();
    }
  }, [pokemonId]);

  return (
    <div>
      <Head>
        <title>{pokemon?.name ?? 'Pokemon Battle!'}</title>
      </Head>

      <Link href='/' className={styles.backHomeLink}>
        <IconChevronLeft size='large' style={{ marginRight: '0.5rem' }} />
        Back to Home
      </Link>

      <div>
        <button
          onClick={() =>
            fetch(`/api/pokemon/${pokemonId}`, {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({ ...pokemon, name: 'Antwan' })
            })
          }
        >
          Update Pokemon Name
        </button>
      </div>

      <div className={styles.layout}>
        <Skeleton style={{ width: 300, height: 300 }} placeholder={<Skeleton.Image />} loading={loading}>
          <Image src={pokemon.image} alt={pokemon.name} width={300} height={300} priority />
        </Skeleton>

        <div>
          <Skeleton style={{ width: 180 }} placeholder={<Skeleton.Title className={styles.name} />} loading={loading}>
            <div className={styles.name}>{pokemon.name}</div>
          </Skeleton>

          <Skeleton
            style={{ width: 120 }}
            placeholder={<Skeleton.Title className={styles.type} style={{ height: 15 }} />}
            loading={loading}
          >
            <TagGroup
              maxTagCount={5}
              className={styles.tags}
              showPopover
              tagList={pokemon.type?.map(t => ({ children: t }))}
              size='large'
            />
          </Skeleton>

          {pokemon.stats && (
            <table className={styles.stats}>
              <tbody>
                {Object.entries(pokemon.stats).map(([name, value]) => (
                  <tr key={name}>
                    <td className={styles.attribute}>{name}</td>
                    <td>{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}

Details.getLayout = function getLayout(page) {
  return <SidebarLayout>{page}</SidebarLayout>;
};

