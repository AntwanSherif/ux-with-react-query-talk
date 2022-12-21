import { useQuery } from '@tanstack/react-query';

const getPokemon = async id => {
  const result = await fetch(`/api/pokemons/${id}`);
  const data = await result.json();

  return data;
};

export function usePokemon(pokemonId) {
  return useQuery({
    queryKey: ['pokemons', pokemonId],
    queryFn: () => getPokemon(pokemonId)
  });
}

