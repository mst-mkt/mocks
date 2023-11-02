import { IconBrandPython } from '@tabler/icons-react';
import styles from './TabBar.module.css';
export const TabBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.tab}>
        <IconBrandPython color="#bbb" size={16} />
        <p>1-1.py</p>
        <button className={styles.close} />
      </div>
    </div>
  );
};
