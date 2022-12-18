import { promises as fs } from 'fs';
import { pokemonsRepo } from '@helpers/api/pokemonsRepo';
import { sleep } from '@helpers/sleep';

export default async function handler(req, res) {
  const { id } = req.query;

  // await sleep(2000);

  // try {
  //   const result = await fetch(`${process.env.endpoint}/pokemon/${id}`);
  //   const pokemon = await result.json();
  //   pokemon.image = `${process.env.endpoint}/${pokemon.image}`;

  //   res.status(200).json(pokemon);
  // } catch (error) {
  //   console.log(error);
  //   res.status(500).json({ error: error.message });
  // }

  // if (req.method === 'GET') {
  // getPokemon(id);
  // return;
  // }

  const pokemon = pokemonsRepo.getById(id);
  res.status(200).json(pokemon);
  // if (req.method === 'POST') {
  //   updatePokemon(req, res);
  //   return;
  // } else {
  //   const pokemon = pokemonsRepo.getById(id);
  //   res.status(200).json(pokemon);
  // }
}

// async function getPokemon(req, res) {
//   const { id } = req.query;

//   try {
//     const result = await fetch(`${process.env.endpoint}/pokemon/${id}`);
//     const pokemon = await result.json();
//     pokemon.image = `${process.env.endpoint}/${pokemon.image}`;

//     res.status(200).json(pokemon);
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ error: error.message });
//   }
// }

// async function updatePokemon(req, res) {
//   const { id } = req.query;
//   const { name } = req.body;

//   try {
//     const jsonDirectory = path.join(process.cwd(), 'json');
//     const fileContents = await fs.readFile(jsonDirectory + '/data.json', 'utf8');

//     const pokemons = JSON.parse(fileContents);

//     const pokemon = pokemons.find(pokemon => pokemon.id === id);
//     pokemon.name = 'test';

//     const newFileContent = JSON.stringify(pokemons, null, 2);

//     res.status(200).json(pokemon);
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ error: error.message });
//   }
// }

