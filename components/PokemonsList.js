import Image from 'next/image';
import Link from 'next/link';
import { Card, CardGroup } from '@douyinfe/semi-ui';
import { rgbDataURL } from '@helpers/imagePlaceholder';
import styles from './PokemonsList.module.css';

export function PokemonsList({ pokemons }) {
  return (
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
  );
}

