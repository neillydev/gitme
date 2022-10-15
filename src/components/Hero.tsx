import { useRouter } from 'next/router';
import React, { useState } from 'react';
import styles from '../../styles/Hero.module.scss';

const Hero = () => {
  const router = useRouter();
  const [path, setPath] = useState('/@neillydev');

  const handleChange = ((e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    setPath(`/@${e.currentTarget.value}`);
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    router.push({
      pathname: path,
    })
  }
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContainer}>
        <div className={styles.heroCaption}>
          <h1>The <span>Modern</span> Developer's Portfolio</h1>
          <h2 className={styles.heroSubheader}>No signup required.</h2>
        </div>
        <div className={styles.heroSearch}>
          <form className={styles.navCenter} onSubmit={handleSubmit}>
            <input type="text" placeholder='Your Github username' onChange={handleChange} />
            <button>Git Me</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Hero