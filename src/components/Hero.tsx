import React from 'react';
import styles from '../../styles/Hero.module.scss';

const Hero = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContainer}>
        <div className={styles.heroCaption}>
            <h1>The <span>Modern</span> Developer's Portfolio</h1>
            <h2 className={styles.heroSubheader}>No signup required.</h2>
        </div>
        <div className={styles.heroSearch}>
            <input type="text" placeholder='Your Github username'/>
            <button>Git Me</button>
        </div>
      </div>
    </section>
  )
}

export default Hero