import styles from './Share.module.css';
import { SharedNote } from './SharedNote/SharedNote';

export type Note = {
  author: {
    name: string;
    avatarUrl: string;
  };
  isLiked: boolean;
  likes: number;
  text: string;
  sharedAt: {
    year: number;
    month: number;
    day: number;
    hour: number;
    minute: number;
  };
};

const notes: Note[] = [
  {
    author: {
      name: '🧶',
      avatarUrl: 'https://github.com/mst-mkt.png',
    },
    isLiked: false,
    likes: 12,
    text: `class Student:
    def __init__(self, student_id: int, family_name: str, first_name: str) -> None:
        self.student_id = student_id
        self.family_name = family_name
        self.first_name = first_name

    def __lt__(self, other: 'Student') -> bool:
        return self.student_id < other.student_id`,
    sharedAt: {
      year: 2023,
      month: 9,
      day: 14,
      hour: 19,
      minute: 27,
    },
  },
  {
    author: {
      name: 'yossuli',
      avatarUrl: 'https://github.com/yossuli.png',
    },
    isLiked: true,
    likes: 4,
    text: `def selection_sort(lst: list[int]) -> None:
    length = len(lst)
    for i in range(length):
        min_index = i
        for j in range(i + 1, length):
            if lst[j] < lst[min_index]:
                min_index = j
        lst[i], lst[min_index] = lst[min_index], lst[i]`,
    sharedAt: {
      year: 2023,
      month: 9,
      day: 14,
      hour: 21,
      minute: 21,
    },
  },
  {
    author: {
      name: 'じゅん',
      avatarUrl: 'https://github.com/jun-eg.png',
    },
    isLiked: false,
    likes: 2,
    text: `def fib1(n: int) -> int:
    if n < 2:
        return min([0, n])
    return fib1(n - 2) + fib1(n - 1)`,
    sharedAt: {
      year: 2023,
      month: 9,
      day: 15,
      hour: 1,
      minute: 56,
    },
  },
  {
    author: {
      name: 'はるき',
      avatarUrl: 'https://github.com/enbipaipu.png',
    },
    isLiked: false,
    likes: 8,
    text: `def fib2(n: int) -> int:
    lst = [0] * (n + 1)
    lst[1] = 1
    for i in range(2, n + 1):
        lst[i] = lst[i - 1] + lst[i - 2]
    return lst[n]`,
    sharedAt: {
      year: 2023,
      month: 9,
      day: 15,
      hour: 2,
      minute: 3,
    },
  },
];

export const Share = () => {
  return (
    <div className={styles.container}>
      <h1>共有ノート</h1>
      {notes.map((note, index) => (
        <SharedNote {...note} key={index} />
      ))}
    </div>
  );
};
