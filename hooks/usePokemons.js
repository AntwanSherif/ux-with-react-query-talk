import { useState, useEffect, useCallback, createContext, useMemo, useContext } from 'react';
import { STATUS } from '@constants/requestStatus';

const getPokemons = async (onComplete, onError) => {
  try {
    const result = await fetch('/api/pokemons');
    const data = await result.json();
    onComplete(data);
  } catch (error) {
    console.log(error);
    onError?.(error);
  }
};

export const PokemonsContext = createContext({
  pokemons: [],
  status: STATUS.IDLE,
  error: null,
  refetch: () => {}
});

export function PokemonsProvider({ children }) {
  const [status, setStatus] = useState(STATUS.IDLE);
  const [pokemons, setPokemons] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    setStatus(STATUS.LOADING);

    getPokemons(
      data => {
        setPokemons(data);
        setStatus(STATUS.SUCCESS);
      },
      error => {
        setError(error);
        setStatus(STATUS.ERROR);
      }
    );
  }, []);

  const refetch = useCallback(() => {
    getPokemons(setPokemons);
  }, []);

  const value = useMemo(
    () => ({
      pokemons,
      status,
      error,
      refetch
    }),
    [error, pokemons, status, refetch]
  );

  return <PokemonsContext.Provider value={value}>{children}</PokemonsContext.Provider>;
}

export function usePokemons() {
  const contextValue = useContext(PokemonsContext);

  if (!contextValue) {
    throw new Error('usePokemons must be used within a PokemonsProvider');
  }

  const { pokemons, status, error, refetch } = contextValue;

  return {
    pokemons,
    status,
    isIdle: status === STATUS.IDLE,
    isLoading: status === STATUS.LOADING,
    isSuccess: status === STATUS.SUCCESS,
    isError: status === STATUS.ERROR,
    error,
    refetch
  };
}

