import { useState } from 'react';
import { usePokemon } from './usePokemon';

export function useEditPokemon(id) {
  const { setPokemon } = usePokemon(id);
  const [isSaving, setIsSaving] = useState(false);
  const [newName, setNewName] = useState('');

  const save = async () => {
    if (newName === pokemon.name) {
      return;
    }

    setIsSaving(true);

    const result = await fetch(`/api/pokemons/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ ...pokemon, name: newName })
    });

    const newPokemon = await result.json();

    setPokemon(newPokemon);
    setNewName(newPokemon.name);
    setIsSaving(false);
    setInEditMode(false);
  };

  return {
    value: newName,
    onChange: setNewName,
    save,
    isSaving
  };
}

