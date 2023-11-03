import { Editor } from '@monaco-editor/react';
import { useEffect, useState } from 'react';
import { StatusBar } from '../StatusBar/StatusBar';
import { TabBar } from '../TabBar/TabBar';
import styles from './Note.module.css';

export const Note = () => {
  const [code, setCode] = useState('');

  useEffect(() => {
    fetch('./example/example.py').then((res) => {
      res.text().then((text) => {
        setCode(text);
      });
    });
  }, []);

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
