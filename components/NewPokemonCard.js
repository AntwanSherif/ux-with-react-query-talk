import { Card } from '@douyinfe/semi-ui';
import { IconPlus } from '@douyinfe/semi-icons';
import styles from './NewPokemonCard.module.css';

export function NewPokemonCard() {
  return (
    <Card
      shadows='hover'
      className={styles.card}
      cover={
        <div className={styles.content}>
          <IconPlus className={styles.icon} style={{ color: 'white' }} />
        </div>
      }
    >
      <Card.Meta title='Surprise me!' className={styles.text} />
    </Card>
  );
}

