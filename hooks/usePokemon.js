import { useQuery } from '@tanstack/react-query';
import { queryClient } from '@helpers/api/queryClient';

const getPokemon = async id => {
  const result = await fetch(`/api/pokemons/${id}`);
  const data = await result.json();

  return data;
};

export function usePokemon(pokemonId) {
  return useQuery({
    queryKey: ['pokemons', pokemonId?.toString()],
    queryFn: () => getPokemon(pokemonId),
    enabled: Boolean(pokemonId)
    // placeholderData: () => {
    //   const foundPokemon = queryClient.getQueryData(['pokemons'])?.find(p => p.id.toString() === pokemonId.toString());

    //   if (!foundPokemon) {
    //     return undefined;
    //   }

    //   return { ...foundPokemon, type: [], stats: [] };
    // }
  });
}

export async function prefetchPokemon(pokemonId) {
  await queryClient.prefetchQuery({
    queryKey: ['pokemons', pokemonId.toString()],
    queryFn: () => getPokemon(pokemonId),
    staleTime: 1 * 60 * 1000
  });
}

