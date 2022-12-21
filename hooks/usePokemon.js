import { useState, useEffect } from 'react';
import { STATUS } from '@constants/requestStatus';

export function usePokemon(id) {
  const [status, setStatus] = useState(STATUS.IDLE);
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getPokemon = async () => {
      try {
        const result = await fetch(`/api/pokemons/${id}`);
        const data = await result.json();

        setPokemon(data);
        setStatus(STATUS.SUCCESS);
      } catch (error) {
        console.log(error);
        setError(error);
        setStatus(STATUS.ERROR);
      }
    };

    if (id) {
      setStatus(STATUS.LOADING);
      getPokemon();
    }

    return () => {
      setPokemon(null);
      setStatus(STATUS.IDLE);
    };
  }, [id]);

  return {
    pokemon,
    setPokemon,
    status,
    isIdle: status === STATUS.IDLE,
    isLoading: status === STATUS.LOADING,
    isSuccess: status === STATUS.SUCCESS,
    isError: status === STATUS.ERROR,
    error
  };
}

