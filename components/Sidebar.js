import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Layout, Typography, List, Input } from '@douyinfe/semi-ui';
import { IconSearch } from '@douyinfe/semi-icons';
import styles from './Sidebar.module.css';

export function Sidebar() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    const getPokemon = async () => {
      const result = await fetch('/api/pokemons');
      const data = await result.json();

      setPokemons(data);
      setFilteredList(data);
      setLoading(false);
    };

    setLoading(true);
    getPokemon();
  }, []);

  const onSearch = useCallback(
    value => {
      let newList;

      if (value) {
        newList = pokemons.filter(item => item.name.includes(value));
      } else {
        newList = pokemons;
      }

      setFilteredList(newList);
    },
    [pokemons]
  );

  return (
    <Layout.Sider className={styles.container}>
      <List
        className={styles.listContainer}
        dataSource={filteredList}
        split={false}
        emptyContent={<Typography.Text>{loading ? 'loading...' : 'No pokemons found'}</Typography.Text>}
        header={<Input onChange={onSearch} showClear placeholder='search' prefix={<IconSearch />} size='large' />}
        size='small'
        style={{ flexBasis: '100%', flexShrink: 0 }}
        renderItem={pokemon => (
          <Link href={`/pokemons/${pokemon.id}`} className={styles.listItem}>
            <List.Item className={styles.listItem}>
              <Image className={styles.thumbnail} src={pokemon.image} alt={pokemon.name} width={50} height={50} />
              <Typography.Text strong className={styles.name}>
                {pokemon.name}
              </Typography.Text>
            </List.Item>
          </Link>
        )}
      />
    </Layout.Sider>
  );
}

