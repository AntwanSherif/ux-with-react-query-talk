import { useState } from 'react';
import Image from 'next/image';
import { Card, Spin } from '@douyinfe/semi-ui';
import { IconPlus } from '@douyinfe/semi-icons';
import styles from './NewPokemonCard.module.css';

const newPokemonsNames = ['karma', 'Maged', 'Meego', 'Aya', 'Samir'];

export function NewPokemonCard({ onAdd }) {
  const [loading, setLoading] = useState(false);

  const createNewPokemon = () => {
    setLoading(true);

    fetch(`/api/pokemons`, {
      method: 'POST',
      body: newPokemonsNames.pop()
    })
      .then(() => onAdd())
      .finally(() => {
        setLoading(false);
      });
  };

  const cardClasses = loading ? `${styles.card} ${styles.loading}` : styles.card;
  const contentClasses = loading ? `${styles.content} ${styles.loading}` : styles.content;

  return (
    <Card
      shadows='hover'
      className={cardClasses}
      cover={
        <div className={contentClasses}>
          {loading ? (
            <Image src='/creating.gif' alt='creating new pokemon' width={130} height={30} />
          ) : (
            <IconPlus className={styles.icon} style={{ color: 'white' }} />
          )}
        </div>
      }
      onClick={!loading ? createNewPokemon : undefined}
    >
      <div className={styles.cardBody}>
        {loading ? <Spin /> : <Card.Meta title='Surprise me!' className={styles.text} />}
      </div>
    </Card>
  );
}

