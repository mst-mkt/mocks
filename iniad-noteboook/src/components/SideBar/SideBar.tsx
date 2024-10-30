import type { TablerIconsProps } from '@tabler/icons-react';
import {
  IconBallpen,
  IconBrandPython,
  IconCaretDown,
  IconCaretRight,
  IconNotebook,
  IconPresentation,
} from '@tabler/icons-react';
import type { FunctionComponent } from 'react';
import styles from './SideBar.module.css';

type File = {
  icon: FunctionComponent<TablerIconsProps>;
  name: string;
};

type Directory = {
  name: string;
  isOpend: boolean;
  files: (File | Directory)[];
};

const subjects: Directory[] = [
  {
    name: '2023年 春',
    isOpend: false,
    files: [],
  },
  {
    name: '2023年 秋',
    isOpend: true,
    files: [
      {
        name: 'CS II',
        isOpend: true,
        files: [
          {
            name: '1-1.py',
            icon: IconBrandPython,
          },
          {
            name: '1-2.py',
            icon: IconBrandPython,
          },
          {
            name: '2-1.py',
            icon: IconBrandPython,
          },
          {
            name: '2-2.py',
            icon: IconBrandPython,
          },
        ],
      },
      {
        name: 'RW II',
        isOpend: false,
        files: [],
      },
      {
        name: 'LS II',
        isOpend: true,
        files: [
          {
            name: 'Lesson 1',
            icon: IconBallpen,
          },
          {
            name: 'Lesson 2',
            icon: IconBallpen,
          },
          {
            name: 'Lesson 3',
            icon: IconBallpen,
          },
          {
            name: 'Lesson 4',
            icon: IconBallpen,
          },
        ],
      },
      {
        name: '情報連携学概論',
        isOpend: false,
        files: [],
      },
      {
        name: '情報連携基礎実習',
        isOpend: true,
        files: [
          {
            name: '第一回議事録.docx',
            icon: IconNotebook,
          },
          {
            name: '第一回発表用資料.pptx',
            icon: IconPresentation,
          },
        ],
      },
      {
        name: '数学',
        isOpend: false,
        files: [],
      },
      {
        name: 'マクロ経済学',
        isOpend: false,
        files: [],
      },
    ],
  },
];

const File = ({ icon: Icon, name }: File) => {
  return (
    <div className={styles.file}>
      <Icon color="#bbb" size={16} />
      <p>{name}</p>
    </div>
  );
};

const Directory = ({ name, files, isOpend }: Directory) => {
  return (
    <div>
      <div className={styles.file}>
        {isOpend ? (
          <IconCaretDown color="#bbb" size={16} />
        ) : (
          <IconCaretRight color="#bbb" size={16} />
        )}
        <p>{name}</p>
      </div>
      <div className={styles.children}>
        {isOpend &&
          files.map((file) =>
            'files' in file ? (
              <Directory key={file.name} {...file} />
            ) : (
              <File key={file.name} {...file} />
            )
          )}
      </div>
    </div>
  );
};

export const SideBar = () => {
  return (
    <div className={styles.container}>
      {subjects.map((subject) => (
        <Directory key={subject.name} {...subject} />
      ))}
    </div>
  );
};
