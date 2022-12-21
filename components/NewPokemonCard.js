import Image from 'next/image';
import { Card, Spin } from '@douyinfe/semi-ui';
import { IconPlus } from '@douyinfe/semi-icons';
import { useAddPokemon } from '@hooks/useAddPokemon';
import styles from './NewPokemonCard.module.css';
import { usePokemons } from '@hooks/usePokemons';

const newPokemonsNames = ['Samira', 'karma', 'Maged', 'Meego', 'Aya', 'Samir'];

export function NewPokemonCard() {
  const { mutate, isLoading: isMutating, isSuccess } = useAddPokemon();
  const { isFetching: isFetchingPokemons } = usePokemons();

  const isLoading = isMutating || (isSuccess && isFetchingPokemons);

  const addNewPokemon = () => {
    mutate(newPokemonsNames[Math.floor(Math.random() * newPokemonsNames.length)]);
  };

  const cardClasses = isLoading ? `${styles.card} ${styles.loading}` : styles.card;
  const contentClasses = isLoading ? `${styles.content} ${styles.loading}` : styles.content;

  return (
    <Card
      shadows='hover'
      className={cardClasses}
      cover={
        <div className={contentClasses}>
          {isLoading ? (
            <Image src='/creating.gif' alt='creating new pokemon' width={130} height={30} />
          ) : (
            <IconPlus className={styles.icon} style={{ color: 'white' }} />
          )}
        </div>
      }
      onClick={!isLoading ? addNewPokemon : undefined}
    >
      <div className={styles.cardBody}>
        {isLoading ? <Spin /> : <Card.Meta title='Surprise me!' className={styles.text} />}
      </div>
    </Card>
  );
}

