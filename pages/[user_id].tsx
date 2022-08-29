import React, { useState } from 'react';
import styles from '../styles/Portfolio.module.scss';
import Feed from '../src/components/Feed';
import Project from '../src/components/Project';
import Tabs from '../src/components/Tabs';
import Overview from '../src/components/Overview';


const Portfolio = () => {
  const [selected, setSelected] = useState(0);

  const tabPages: {[key: number]: JSX.Element } = {
    0: <Overview />
  };

  return (
    <div className={styles.portfolioContainer}>
      <aside className={styles.portfolioLeft}>
        <div className={styles.profileContainer}>
          <div className={styles.profileWrapper}>
            <div className={styles.portfolioImg}>
              <img src="https://avatars.githubusercontent.com/u/51303046?v=4" alt="profile picture" />
            </div>
            <div className={styles.portfolioBio}>
              <div className={styles.name}>Vernon Neilly III</div>
              <div className={styles.username}><span />@neillydev</div>
              <div className={styles.bio}>
                Programming is my passion! I love being able to develop incredible creations with only an idea and a keyboard!
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