import { pokemonsRepo } from '@helpers/api/pokemonsRepo';
import { sleep } from '@helpers/sleep';

export default async function handler(req, res) {
  const { id } = req.query;

  await sleep(3000);

  if (req.method === 'PUT') {
    pokemonsRepo.update(id, { ...req.body });
    res.status(200).json({ message: 'Pokemon updated successfully!' });
  } else {
    const pokemon = pokemonsRepo.getById(id);
    res.status(200).json(pokemon);
  }
}

