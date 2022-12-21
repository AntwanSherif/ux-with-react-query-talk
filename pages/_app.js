import { PokemonsProvider } from '@hooks/usePokemons';
import '@styles/globals.css';

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || (page => page);

  return <PokemonsProvider>{getLayout(<Component {...pageProps} />)}</PokemonsProvider>;
}

