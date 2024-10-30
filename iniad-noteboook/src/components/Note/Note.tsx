import { Editor } from '@monaco-editor/react';
import type { Dispatch, SetStateAction } from 'react';
import { StatusBar } from '../StatusBar/StatusBar';
import { TabBar } from '../TabBar/TabBar';
import styles from './Note.module.css';

type Props = {
  code: string;
  activeTab: 1 | 2;
  setTab: Dispatch<SetStateAction<1 | 2>>;
};

export const Note = ({ code, activeTab, setTab }: Props) => {
  return (
    <div className={styles.container}>
      <TabBar activeTab={activeTab} setTab={setTab} />
      {activeTab === 1 ? (
        <div className={styles.editor}>
          <Editor theme="vs-dark" language="python" defaultValue={code} />
        </div>
      ) : (
        <div className={styles.note}>
          <h1>情報連携実習 第一回議事録</h1>
          <ul>
            <li>目的: 大学生活の向上</li>
            <li>日時: 2023 / 10 / 04 / 3限</li>
            <li>場所: INIAD 4101</li>
            <li>参加者: 坂村健, 矢代武嗣, 別所正博, 満永拓邦</li>
            <li>記録者: 坂村健</li>
          </ul>
          <h2>議題1. 大学の特徴</h2>
          <ul>
            <li>コミュニティが限られている</li>
            <li>ペーパーレスの徹底</li>
            <li>授業が基本パソコンで完結している</li>
            <li>油淋鶏がおいしい</li>
          </ul>
          <h2>議題2. 大学生活の改善点</h2>
          <ul>
            <li>ToyoNetAceやMOOCsなどに情報が散らばっている</li>
            <li>他学部との関わりが少ない</li>
          </ul>
        </div>
      )}
      <StatusBar />
    </div>
  );
};
