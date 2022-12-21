import { queryClient } from '@helpers/api/queryClient';
import { useMutation } from '@tanstack/react-query';

const editPokemon = async newPokemon => {
  return fetch(`/api/pokemons/${newPokemon.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newPokemon)
  });
};

export function useEditPokemon() {
  return useMutation({
    mutationFn: pokemon => editPokemon(pokemon),
    onSuccess: () => {
      queryClient.invalidateQueries(['pokemons']);
    }
  });
}

