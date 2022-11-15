import React, { useState, useEffect, useContext } from 'react';
import styles from '../styles/Portfolio.module.scss';
import Feed from '../src/components/Feed';
import Project from '../src/components/Project';
import Tabs from '../src/components/Tabs';
import Overview from '../src/components/Overview';
import Projects from '../src/components/Projects';
import Experience from '../src/components/Experience';
import Contact from '../src/components/Contact';
import axios from 'axios';

import { useRouter } from 'next/router';


const Portfolio = () => {
  const router = useRouter();
  const { user_id } = router.query;
  const [portfolio, setPortfolio] = useState<any>();

  const [selected, setSelected] = useState(0);

  const tabPages: { [key: number]: JSX.Element } = {
    0: <Overview />,
    1: <Projects />,
    2: <Experience />,
    3: <Contact />
  };

  const handleProfile = async () => {
    await axios.get(`/api/portfolio/${user_id}`).then(({data}: any) => {
      setPortfolio(data);
    });
  };

  useEffect(() => {
    if(!user_id){
      return;
    }
    handleProfile();
  }, [user_id]);

  return (
    <div className={styles.portfolioContainer}>
      <aside className={styles.portfolioLeft}>
        <div className={styles.profileContainer}>
          <div className={styles.profileWrapper}>
            <div className={styles.portfolioImg}>
              <img src={portfolio?.avatar_url} alt="profile picture" />
            </div>
            <div className={styles.portfolioBio}>
              <div className={styles.name}>{portfolio?.name}</div>
              <div className={styles.username}><span /><a target="_blank" href={`https://github.com/${user_id?.toString().split('@')[1]}`} rel="noopener noreferrer">{user_id}</a></div>
              <div className={styles.bio}>
                {portfolio?.bio}
              </div>
            </div>
          </div>
        </div>
      </aside>
      <div className={styles.portfolioRight}>
        <div className={styles.portfolioWrapper}>
          <Tabs selected={selected} setSelected={setSelected} />
          {/* <div className={styles.featuredSection}></div> */}
          <div className={styles.portfolioContent}>
            {/* <h1 className={styles.overviewHeader}>Featured Projects</h1> */}
            {tabPages[selected]}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio