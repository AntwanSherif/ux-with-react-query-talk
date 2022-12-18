// import { sleep } from '@helpers/sleep';

export default async function handler(req, res) {
  const { id } = req.query;

  // await sleep(3000);

  const result = await fetch(`${process.env.endpoint}/pokemon/${id}`);
  const pokemon = await result.json();
  pokemon.image = `${process.env.endpoint}/${pokemon.image}`;

  res.status(200).json(pokemon);
}

