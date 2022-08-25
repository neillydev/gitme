import React from 'react';
import styles from '../styles/Portfolio.module.scss';
import Project from './components/Project';
import Tabs from './components/Tabs';


const Portfolio = () => {
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
          <Tabs />
          {/* <div className={styles.featuredSection}></div> */}
          <div className={styles.portfolioContent}>
            {/* <h1 className={styles.overviewHeader}>Featured Projects</h1> */}
            <div className={styles.projectsSection}>
              <Project />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio