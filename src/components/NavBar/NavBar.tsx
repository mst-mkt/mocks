import {
  IconAdjustmentsAlt,
  IconBell,
  IconEdit,
  IconPresentation,
  IconUsers,
} from '@tabler/icons-react';
import type { Dispatch, SetStateAction } from 'react';
import styles from './NavBar.module.css';

const Icons = [
  { Icon: IconEdit, alt: 'ノート' },
  { Icon: IconPresentation, alt: 'スライド' },
  { Icon: IconBell, alt: '通知' },
  { Icon: IconUsers, alt: '共有' },
  null,
  { Icon: IconAdjustmentsAlt, alt: '設定' },
];

type Props = {
  page: number;
  changePage: Dispatch<SetStateAction<number>>;
};

export const NavBar = ({ page, changePage }: Props) => {
  return (
    <div className={styles.container}>
      {Icons.map((icon, index) =>
        icon === null ? (
          <div className={styles.spacer} key={index} />
        ) : (
          <div
            className={`${styles.icon} ${page === index ? styles.active : ''}`}
            onClick={() => changePage(index)}
            key={index}
          >
            <icon.Icon color="#bbb" size={24} />
            <p>{icon.alt}</p>
          </div>
        )
      )}
    </div>
  );
};
