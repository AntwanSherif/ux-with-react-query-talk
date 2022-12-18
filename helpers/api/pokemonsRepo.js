import fs from 'fs';

let pokemons = require('json/data.json');

export const pokemonsRepo = {
  getAll: () => pokemons,
  getById: id => pokemons.find(x => x.id.toString() === id.toString()),
  // create,
  update,
  delete: _delete
};

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

