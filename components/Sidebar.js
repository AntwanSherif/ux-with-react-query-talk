import { useState, useEffect, useCallback } from 'react';
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
      <div
        style={{
          marginRight: 16,
          width: '100%',
          display: 'flex',
          flexWrap: 'wrap'
        }}
      >
        <List
          className={styles.listContainer}
          dataSource={filteredList}
          split={false}
          emptyContent={<Typography.Text>{loading ? 'loading...' : 'No Pokemon Found'}</Typography.Text>}
          header={<Input onChange={onSearch} showClear placeholder='search' prefix={<IconSearch />} />}
          size='small'
          style={{ flexBasis: '100%', flexShrink: 0 }}
          renderItem={pokemon => (
            <List.Item className='list-item'>
              <Link href={`/pokemon/${pokemon.id}`}>{pokemon.name}</Link>
            </List.Item>
          )}
        />
      </div>
    </Layout.Sider>
  );
}

