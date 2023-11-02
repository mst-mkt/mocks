import { useState } from 'react';
import { NavBar } from '../components/NavBar/NavBar';
import { Note } from '../components/Note/Note';
import { SideBar } from '../components/SideBar/SideBar';
import styles from './index.module.css';

const Home = () => {
  const [page, setPage] = useState(0);

  return (
    <div className={styles.container}>
      <NavBar page={page} changePage={setPage} />
      <SideBar />
      <Note />
    </div>
  );
};

export default Home;
