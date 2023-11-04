import { IconHeart } from '@tabler/icons-react';
import type { Note } from '../Share';
import styles from './SharedNote.module.css';

export const SharedNote = ({ author, isLiked, likes, text, sharedAt }: Note) => {
  return (
    <article className={styles.container}>
      <header>
        <div className={styles.avatar}>
          <img src={author.avatarUrl} alt={`${author.name}'s avatar`} />
        </div>
        <p className={styles.name}>{author.name}</p>
      </header>
      <main>
        <code className={styles.main}>{text}</code>
      </main>
      <footer>
        <button className={styles.likeButton}>
          <IconHeart color={isLiked ? '#f00' : '#bbb'} size={16} />
          <p>{likes}</p>
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
