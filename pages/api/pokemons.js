import { pokemonsRepo } from '@helpers/api/pokemonsRepo';
import { sleep } from '@helpers/sleep';

export default async function handler(req, res) {
  await sleep(3000);

  if (req.method === 'POST') {
    const pokemon = pokemonsRepo.create(req.body);
    res.status(200).json(pokemon);
  } else {
    const pokemons = pokemonsRepo.getAll();
    res.status(200).json(pokemons);
  }
}

