import React from 'react'
import ExtSvg from '../../public/extlink.svg';

import styles from '../../styles/Project.module.scss';

type Props = {
  profile_img: string;
  name: string;
  username: string;
  bio: string;

};

const Project = () => {
  return (
    <div className={styles.projContainer}>
      <div className={styles.projHeader}>
        <h1>gitme</h1>
        <h2>The Modern Developer's Portfolio</h2>
      </div>
      {/* <div className={styles.projectBody}>
        <h2>The Modern Developer's Portfolio</h2>
        <ExtSvg />
      </div> */}
      <div className={styles.projectFooter}>
        <a href='http://localhost:3000' target='_blank'><ExtSvg /></a>
      </div>
      <div className={styles.projectOverlay}>
        <img className={styles.projectImg} src="https://i.imgur.com/95sfhtr.png"></img>
      </div>
    </div>
  )
}

export default Project