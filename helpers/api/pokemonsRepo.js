import fs from 'fs';

let pokemons = require('json/data.json');

export const pokemonsRepo = {
  getAll: () => pokemons.map(({ id, name, image }) => ({ id, name, image })),
  getById: id => pokemons.find(x => x.id.toString() === id.toString()),
  create,
  update,
  delete: _delete
};

function create(name) {
  const lastPokemonInList = pokemons[pokemons.length - 1];
  const firstPokemonInList = pokemons[0];
  const id = firstPokemonInList.id > 1 ? firstPokemonInList.id + 1 : lastPokemonInList.id + 1;

  if (name) {
    const pokemon = {
      ...lastPokemonInList,
      id,
      name,
      image: `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png`
    };

    pokemons.unshift(pokemon);
    saveData();

    return pokemon;
  }
}

function update(id, params) {
  const pokemon = pokemons.find(x => x.id.toString() === id.toString());
  Object.assign(pokemon, params);
  saveData();
}

function _delete(id) {
  pokemons = pokemons.filter(x => x.id.toString() !== id.toString());
  saveData();
}

function saveData() {
  fs.writeFileSync('json/data.json', JSON.stringify(pokemons, null, 4));
}

