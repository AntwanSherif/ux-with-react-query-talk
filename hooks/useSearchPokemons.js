import { useEffect, useCallback, useState } from 'react';
import { usePokemons } from './usePokemons';

export function useSearchPokemons() {
  const { data: pokemons, isLoading, isSuccess } = usePokemons();
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    setFilteredList(pokemons);
  }, [isSuccess, pokemons]);

  const onSearch = useCallback(
    value => {
      let newList;

      if (value) {
        newList = pokemons.filter(item => item.name.includes(value));
      } else {
        newList = pokemons;
      }

      setFilteredList(newList);
    },
    [pokemons]
  );

  return {
    isLoading,
    list: filteredList,
    onSearch
  };
}

