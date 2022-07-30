import React from 'react';
import styles from '../styles/Portfolio.module.scss';


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
      <div className={styles.portfolioRight}></div>
    </div>
  )
}

export default Portfolio