import React from 'react'

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
      </div>
      <div className={styles.projectOverlay}>
        <img className={styles.projectImg} src="https://i.imgur.com/95sfhtr.png"></img>
      </div>
    </div>
  )
}

export default Project