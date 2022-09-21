import React from 'react';
import styles from '../../styles/Hero.module.scss';

import PreviewXL from '../../public/Preview_Light.svg';
import PreviewLarge from '../../public/Preview_Light_1600.svg';
import Preview from '../../public/Preview_Light_1290.svg';

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
            <PreviewXL className={styles.previewXL} />
            <PreviewLarge className={styles.previewLarge} />
            <Preview className={styles.preview} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero