import path from 'path';
import { promises as fs } from 'fs';

export default async function handler(req, res) {
  //Find the absolute path of the json directory
  // const jsonDirectory = path.join(process.cwd(), 'json');
  //Read the json data file data.json
  // const fileContents = await fs.readFile(jsonDirectory + '/pokemons.json', 'utf8');
  //Return the content of the data file in json format
  res.status(200).json([
    {
      id: 1,
      name: 'Bulbasaur',
      image: 'images/bulbasaur.jpg'
    },
    {
      id: 2,
      name: 'Ivysaur',
      image: 'images/ivysaur.jpg'
    },
    {
      id: 4,
      name: 'Charmander',
      image: 'images/charmander.jpg'
    },
    {
      id: 5,
      name: 'Charmeleon',
      image: 'images/charmeleon.jpg'
    },
    {
      id: 6,
      name: 'Charizard',
      image: 'images/charizard.jpg'
    },
    {
      id: 7,
      name: 'Squirtle',
      image: 'images/squirtle.jpg'
    },
    {
      id: 8,
      name: 'Wartortle',
      image: 'images/wartortle.jpg'
    },
    {
      id: 9,
      name: 'Blastoise',
      image: 'images/blastoise.jpg'
    },
    {
      id: 10,
      name: 'Caterpie',
      image: 'images/caterpie.jpg'
    },
    {
      id: 11,
      name: 'Metapod',
      image: 'images/metapod.jpg'
    },
    {
      id: 12,
      name: 'Butterfree',
      image: 'images/butterfree.jpg'
    },
    {
      id: 13,
      name: 'Weedle',
      image: 'images/weedle.jpg'
    },
    {
      id: 15,
      name: 'Beedrill',
      image: 'images/beedrill.jpg'
    },
    {
      id: 16,
      name: 'Pidgey',
      image: 'images/pidgey.jpg'
    },
    {
      id: 17,
      name: 'Pidgeotto',
      image: 'images/pidgeotto.jpg'
    },
    {
      id: 20,
      name: 'Raticate',
      image: 'images/raticate.jpg'
    },
    {
      id: 24,
      name: 'Arbok',
      image: 'images/arbok.jpg'
    },
    {
      id: 25,
      name: 'Pikachu',
      image: 'images/pikachu.jpg'
    },
    {
      id: 26,
      name: 'Raichu',
      image: 'images/raichu.jpg'
    },
    {
      id: 35,
      name: 'Clefairy',
      image: 'images/clefairy.jpg'
    },
    {
      id: 36,
      name: 'Clefable',
      image: 'images/clefable.jpg'
    },
    {
      id: 37,
      name: 'Vulpix',
      image: 'images/vulpix.jpg'
    },
    {
      id: 38,
      name: 'Ninetales',
      image: 'images/ninetales.jpg'
    },
    {
      id: 39,
      name: 'Jigglypuff',
      image: 'images/jigglypuff.jpg'
    },
    {
      id: 41,
      name: 'Zubat',
      image: 'images/zubat.jpg'
    },
    {
      id: 42,
      name: 'Golbat',
      image: 'images/golbat.jpg'
    },
    {
      id: 43,
      name: 'Oddish',
      image: 'images/oddish.jpg'
    },
    {
      id: 44,
      name: 'Gloom',
      image: 'images/gloom.jpg'
    },
    {
      id: 48,
      name: 'Venonat',
      image: 'images/venonat.jpg'
    },
    {
      id: 50,
      name: 'Diglett',
      image: 'images/diglett.jpg'
    },
    {
      id: 51,
      name: 'Dugtrio',
      image: 'images/dugtrio.jpg'
    },
    {
      id: 52,
      name: 'Meowth',
      image: 'images/meowth.jpg'
    },
    {
      id: 54,
      name: 'Psyduck',
      image: 'images/psyduck.jpg'
    },
    {
      id: 55,
      name: 'Golduck',
      image: 'images/golduck.jpg'
    },
    {
      id: 56,
      name: 'Mankey',
      image: 'images/mankey.jpg'
    },
    {
      id: 63,
      name: 'Abra',
      image: 'images/abra.jpg'
    },
    {
      id: 64,
      name: 'Kadabra',
      image: 'images/kadabra.jpg'
    },
    {
      id: 65,
      name: 'Alakazam',
      image: 'images/alakazam.jpg'
    },
    {
      id: 66,
      name: 'Machop',
      image: 'images/machop.jpg'
    },
    {
      id: 67,
      name: 'Machoke',
      image: 'images/machoke.jpg'
    },
    {
      id: 68,
      name: 'Machamp',
      image: 'images/machamp.jpg'
    },
    {
      id: 69,
      name: 'Bellsprout',
      image: 'images/bellsprout.jpg'
    },
    {
      id: 70,
      name: 'Weepinbell',
      image: 'images/weepinbell.jpg'
    },
    {
      id: 74,
      name: 'Geodude',
      image: 'images/geodude.jpg'
    },
    {
      id: 77,
      name: 'Ponyta',
      image: 'images/ponyta.jpg'
    },
    {
      id: 78,
      name: 'Rapidash',
      image: 'images/rapidash.jpg'
    },
    {
      id: 79,
      name: 'Slowpoke',
      image: 'images/slowpoke.jpg'
    },
    {
      id: 80,
      name: 'Slowbro',
      image: 'images/slowbro.jpg'
    },
    {
      id: 81,
      name: 'Magnemite',
      image: 'images/magnemite.jpg'
    },
    {
      id: 82,
      name: 'Magneton',
      image: 'images/magneton.jpg'
    },
    {
      id: 84,
      name: 'Doduo',
      image: 'images/doduo.jpg'
    },
    {
      id: 85,
      name: 'Dodrio',
      image: 'images/dodrio.jpg'
    },
    {
      id: 88,
      name: 'Grimer',
      image: 'images/grimer.jpg'
    },
    {
      id: 90,
      name: 'Shellder',
      image: 'images/shellder.jpg'
    },
    {
      id: 91,
      name: 'Cloyster',
      image: 'images/cloyster.jpg'
    },
    {
      id: 92,
      name: 'Gastly',
      image: 'images/gastly.jpg'
    },
    {
      id: 93,
      name: 'Haunter',
      image: 'images/haunter.jpg'
    },
    {
      id: 94,
      name: 'Gengar',
      image: 'images/gengar.jpg'
    },
    {
      id: 95,
      name: 'Onix',
      image: 'images/onix.jpg'
    },
    {
      id: 96,
      name: 'Drowzee',
      image: 'images/drowzee.jpg'
    },
    {
      id: 97,
      name: 'Hypno',
      image: 'images/hypno.jpg'
    },
    {
      id: 100,
      name: 'Voltorb',
      image: 'images/voltorb.jpg'
    },
    {
      id: 101,
      name: 'Electrode',
      image: 'images/electrode.jpg'
    },
    {
      id: 102,
      name: 'Exeggcute',
      image: 'images/exeggcute.jpg'
    },
    {
      id: 103,
      name: 'Exeggutor',
      image: 'images/exeggutor.jpg'
    },
    {
      id: 104,
      name: 'Cubone',
      image: 'images/cubone.jpg'
    },
    {
      id: 105,
      name: 'Marowak',
      image: 'images/marowak.jpg'
    },
    {
      id: 106,
      name: 'Hitmonlee',
      image: 'images/hitmonlee.jpg'
    },
    {
      id: 107,
      name: 'Hitmonchan',
      image: 'images/hitmonchan.jpg'
    },
    {
      id: 108,
      name: 'Lickitung',
      image: 'images/lickitung.jpg'
    },
    {
      id: 109,
      name: 'Koffing',
      image: 'images/koffing.jpg'
    },
    {
      id: 110,
      name: 'Weezing',
      image: 'images/weezing.jpg'
    },
    {
      id: 114,
      name: 'Tangela',
      image: 'images/tangela.jpg'
    },
    {
      id: 116,
      name: 'Horsea',
      image: 'images/horsea.jpg'
    },
    {
      id: 117,
      name: 'Seadra',
      image: 'images/seadra.jpg'
    },
    {
      id: 120,
      name: 'Staryu',
      image: 'images/staryu.jpg'
    },
    {
      id: 121,
      name: 'Starmie',
      image: 'images/starmie.jpg'
    },
    {
      id: 123,
      name: 'Scyther',
      image: 'images/scyther.jpg'
    },
    {
      id: 124,
      name: 'Jynx',
      image: 'images/jynx.jpg'
    },
    {
      id: 127,
      name: 'Pinsir',
      image: 'images/pinsir.jpg'
    },
    {
      id: 129,
      name: 'Magikarp',
      image: 'images/magikarp.jpg'
    },
    {
      id: 130,
      name: 'Gyarados',
      image: 'images/gyarados.jpg'
    },
    {
      id: 131,
      name: 'Lapras',
      image: 'images/lapras.jpg'
    },
    {
      id: 133,
      name: 'Eevee',
      image: 'images/eevee.jpg'
    },
    {
      id: 135,
      name: 'Jolteon',
      image: 'images/jolteon.jpg'
    },
    {
      id: 136,
      name: 'Flareon',
      image: 'images/flareon.jpg'
    },
    {
      id: 137,
      name: 'Porygon',
      image: 'images/porygon.jpg'
    },
    {
      id: 142,
      name: 'Aerodactyl',
      image: 'images/aerodactyl.jpg'
    },
    {
      id: 143,
      name: 'Snorlax',
      image: 'images/snorlax.jpg'
    },
    {
      id: 144,
      name: 'Articuno',
      image: 'images/articuno.jpg'
    },
    {
      id: 145,
      name: 'Zapdos',
      image: 'images/zapdos.jpg'
    },
    {
      id: 146,
      name: 'Moltres',
      image: 'images/moltres.jpg'
    },
    {
      id: 150,
      name: 'Mewtwo',
      image: 'images/mewtwo.jpg'
    },
    {
      id: 151,
      name: 'Mew',
      image: 'images/mew.jpg'
    },
    {
      id: 175,
      name: 'Togepi',
      image: 'images/togepi.jpg'
    },
    {
      id: 201,
      name: 'Unown',
      image: 'images/unown.jpg'
    },
    {
      id: 202,
      name: 'Wobbuffet',
      image: 'images/wobbuffet.jpg'
    },
    {
      id: 203,
      name: 'Girafarig',
      image: 'images/girafarig.jpg'
    },
    {
      id: 204,
      name: 'Pineco',
      image: 'images/pineco.jpg'
    },
    {
      id: 209,
      name: 'Snubbull',
      image: 'images/snubbull.jpg'
    }
  ]);
}

