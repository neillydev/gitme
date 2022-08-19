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

            <div className={styles.portfolioImg}></div>
            <div className={styles.name}>Vernon Neilly III</div>
            <div className={styles.username}><span />neillydev</div>
          </div>
        </div>
      </aside>
      <div className={styles.portfolioRight}>
        <div className={styles.portfolioWrapper}>
          <Tabs />
          <div className={styles.featuredSection}></div>
          <div className={styles.projectsSection}>
            <Project />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio