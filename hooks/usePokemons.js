import { useState, useEffect, useCallback } from 'react';
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

export function usePokemons() {
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

