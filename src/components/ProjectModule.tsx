import React from 'react';

import GithubSmSVG from '../../public/github_sm.svg';

import styles from '../../styles/ProjectModule.module.scss';

type Props = {
  name: string;
  description: string;
};

const ProjectModule = ({ 
  name,
  description
 }: Props) => {
  return (
    <li className={styles.modContainer}>
      <div className={styles.modWrapper}>
        <div className={styles.modHead}>
          <GithubSmSVG />
        </div>
        <div className={styles.modHeader}>
          <h1>{name}</h1>
          <h2>{description}</h2>
        </div>
        <div className={styles.modFooter}></div>
      </div>
    </li>
  )
}

export default ProjectModule