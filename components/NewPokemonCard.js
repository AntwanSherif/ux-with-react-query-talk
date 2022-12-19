import { Card } from '@douyinfe/semi-ui';
import { IconPlus } from '@douyinfe/semi-icons';
import styles from './NewPokemonCard.module.css';

const newPokemonsNames = ['karma', 'Maged', 'Meego', 'Aya', 'Samir'];

export function NewPokemonCard() {
  const createNewPokemon = () =>
    fetch(`/api/pokemons`, {
      method: 'POST',
      body: newPokemonsNames.pop()
    });

  return (
    <Card
      shadows='hover'
      className={styles.card}
      cover={
        <div className={styles.content}>
          <IconPlus className={styles.icon} style={{ color: 'white' }} />
        </div>
      }
      onClick={createNewPokemon}
    >
      <Card.Meta title='Surprise me!' className={styles.text} />
    </Card>
  );
}

