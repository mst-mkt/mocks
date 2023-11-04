import { IconHeart } from '@tabler/icons-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import type { Note } from '../Share';
import styles from './SharedNote.module.css';

const codeStyle: React.CSSProperties = {
  backgroundColor: '#0f0f0f',
  fontSize: '12px',
};

export const SharedNote = ({ author, isLiked, likes, text, sharedAt }: Note) => {
  return (
    <article className={styles.container}>
      <header>
        <div className={styles.avatar}>
          <img src={author.avatarUrl} alt={`${author.name}'s avatar`} />
        </div>
        <p className={styles.name}>{author.name}</p>
      </header>
      <main className={styles.main}>
        <SyntaxHighlighter language="python" style={vscDarkPlus} customStyle={codeStyle}>
          {text}
        </SyntaxHighlighter>
      </main>
      <footer>
        <button className={styles.likeButton}>
          <IconHeart color={isLiked ? '#f00' : '#bbb'} size={16} />
          <p style={{ color: isLiked ? '#f00' : '#bbb' }}>{likes}</p>
        </button>
        <div className={styles.sharedAt}>
          <p>
            {sharedAt.year}/{sharedAt.month}/{sharedAt.day} {sharedAt.hour}:{sharedAt.minute}
          </p>
        </div>
      </footer>
    </article>
  );
};
