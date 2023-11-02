import { IconShare } from '@tabler/icons-react';
import styles from './StatusBar.module.css';

export const StatusBar = () => {
  return (
    <div className={styles.container}>
      <button className={styles.button}>
        <IconShare color="#bbb" size={16} />
        <span>共有</span>
      </button>
      <div className={styles.spacer} />
      <div className={styles.info}>文字数: 1,234</div>
      <div className={styles.info}>単語数: 258</div>
    </div>
  );
};
