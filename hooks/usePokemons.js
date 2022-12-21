import { useQuery } from '@tanstack/react-query';

const getPokemons = async () => {
  const result = await fetch('/api/pokemons');
  const data = await result.json();

  return data;
};

export function usePokemons() {
  return useQuery({
    queryKey: ['pokemons'],
    queryFn: getPokemons
  });
}

