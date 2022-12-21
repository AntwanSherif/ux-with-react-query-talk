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
    onMutate: async name => {
      // Cancel current queries for the todos list
      await queryClient.cancelQueries({ queryKey: ['pokemons'] });

      const cachedPokemons = queryClient.getQueryData(['pokemons']);

      if (cachedPokemons) {
        const lastPokemonInList = cachedPokemons[cachedPokemons.length - 1];
        const firstPokemonInList = cachedPokemons[0];
        const id = firstPokemonInList.id > 1 ? firstPokemonInList.id + 1 : lastPokemonInList.id + 1;

        // Create optimistic pokemon
        const optimisticPokemon = {
          ...lastPokemonInList,
          id,
          name,
          image: `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png`
        };

        // Add optimistic todo to todos list
        queryClient.setQueryData(['pokemons'], old => [optimisticPokemon, ...old]);

        // Return context with the optimistic todo
        return { optimisticPokemon };
      }
    },
    onError: (error, variables, context) => {
      // Remove optimistic pokemon from the todos list
      queryClient.setQueryData(['pokemons'], old => old.filter(todo => todo.id !== context.optimisticPokemon.id));
    },
    onSettled: () => {
      // Replace optimistic pokemon in the todos list with the result
      queryClient.invalidateQueries(['pokemons']);
    }
  });
}

