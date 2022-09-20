import React from 'react';
import styles from '../../styles/Hero.module.scss';

import Preview from '../../public/Preview_Light.svg';

const Hero = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContainer}>
        <div className={styles.heroHeader}>
          <h1>The <span>Modern</span> Developer's Portfolio</h1>
        </div>
        <div className={styles.heroSubheader}>
          <h4>No signup required.</h4>
        </div>
        <div className={styles.heroGrid}>
          <div className={styles.previewWrapper}>
            <Preview />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero