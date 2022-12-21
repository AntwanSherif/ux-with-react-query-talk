import { queryClient } from '@helpers/api/queryClient';
import { useMutation } from '@tanstack/react-query';

const createNewPokemon = async name => {
  return fetch(`/api/pokemons`, {
    method: 'POST',
    body: name
  });
};

export function useAddPokemon() {
  return useMutation({
    mutationFn: name => createNewPokemon(name),
    onSuccess: () => {
      queryClient.invalidateQueries(['pokemons']);
    }
  });
}
