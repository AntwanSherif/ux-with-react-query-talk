import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Layout, Typography, List, Input } from '@douyinfe/semi-ui';
import { IconSearch } from '@douyinfe/semi-icons';
import { useSearchPokemons } from '@hooks/useSearchPokemons';
import styles from './Sidebar.module.css';

export function Sidebar() {
  const { list, isLoading, onSearch } = useSearchPokemons();

  return (
    <Layout.Sider className={styles.container}>
      <List
        className={styles.listContainer}
        dataSource={list}
        split={false}
        emptyContent={<Typography.Text>{isLoading ? 'loading...' : 'No pokemons found'}</Typography.Text>}
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

