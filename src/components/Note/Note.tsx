import { Editor } from '@monaco-editor/react';
import { StatusBar } from '../StatusBar/StatusBar';
import { TabBar } from '../TabBar/TabBar';
import styles from './Note.module.css';

type Props = {
  code: string;
};

export const Note = ({ code }: Props) => {
  return (
    <div className={styles.container}>
      <TabBar />
      <div className={styles.editor}>
        <Editor theme="vs-dark" language="python" defaultValue={code} />
      </div>
      <StatusBar />
    </div>
  );
};
