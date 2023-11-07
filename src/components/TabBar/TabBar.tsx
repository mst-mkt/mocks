import { IconBallpen, IconBrandPython } from '@tabler/icons-react';
import type { Dispatch, SetStateAction } from 'react';
import styles from './TabBar.module.css';

type Props = {
  activeTab: 1 | 2;
  setTab: Dispatch<SetStateAction<1 | 2>>;
};

export const TabBar = ({ activeTab, setTab }: Props) => {
  return (
    <div className={styles.container}>
      <div
        className={`${styles.tab} ${activeTab === 1 ? styles.active : ''}`}
        onClick={() => setTab(1)}
      >
        <IconBrandPython color="#bbb" size={16} />
        <p>1-1.py</p>
        <button className={styles.close} />
      </div>
      <div
        className={`${styles.tab} ${activeTab === 2 ? styles.active : ''}`}
        onClick={() => setTab(2)}
      >
        <IconBallpen color="#bbb" size={16} />
        <p>第一回議事録</p>
        <button className={styles.close} />
      </div>
    </div>
  );
};
