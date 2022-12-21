import { Typography } from '@douyinfe/semi-ui';
import Image from 'next/image';
import styles from './ErrorDisplay.module.css';

export function ErrorDisplay(error) {
  return (
    <div className={styles.container}>
      <Image src='/error.gif' alt='something wrong happened' width={180} height={180} />
      <Typography.Title heading={5}>Something went wrong!</Typography.Title>
      <Typography>{error.message}</Typography>
    </div>
  );
}

