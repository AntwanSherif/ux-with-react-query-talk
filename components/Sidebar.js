import { useState, useEffect } from 'react';
import { Layout, Typography } from '@douyinfe/semi-ui';
import styles from './Sidebar.module.css';

export function Sidebar() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const getPokemon = async () => {
      const result = await fetch('/api/pokemons');
      const data = await result.json();

      setPokemons(data);
    };

    getPokemon();
  }, []);

  return <Layout.Sider className={styles.container}></Layout.Sider>;
}

