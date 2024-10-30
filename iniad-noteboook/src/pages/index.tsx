import { useEffect, useState } from 'react';
import { NavBar } from '../components/NavBar/NavBar';
import { Note } from '../components/Note/Note';
import { Share } from '../components/Share/Share';
import { SideBar } from '../components/SideBar/SideBar';
import styles from './index.module.css';

const Home = () => {
  const [page, setPage] = useState(0);
  const [tab, setTab] = useState<1 | 2>(1);
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
      <NavBar page={page} changePage={setPage} />
      <SideBar />
      {page === 0 && <Note code={code} activeTab={tab} setTab={setTab} />}
      {page === 3 && <Share />}
    </div>
  );
};

export default Home;
