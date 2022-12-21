import Image from 'next/image';
import Link from 'next/link';
import { Card, CardGroup } from '@douyinfe/semi-ui';
import { rgbDataURL } from '@helpers/imagePlaceholder';
import styles from './PokemonsList.module.css';
import { NewPokemonCard } from './NewPokemonCard';
import { prefetchPokemon } from '@hooks/usePokemon';

export function PokemonsList({ pokemons, onAdd }) {
  return (
    <CardGroup spacing={30} className={styles.cardsGrid}>
      <NewPokemonCard className={styles.card} onAdd={onAdd} />

      {pokemons.map(pokemon => (
        <Link key={pokemon.id} href={`/pokemons/${pokemon.id}`}>
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
            onMouseEnter={() => prefetchPokemon(pokemon.id)}
          >
            <Card.Meta title={pokemon.name} />
          </Card>
        </Link>
      ))}
    </CardGroup>
  );
}

