import React from 'react';
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
          
        </div>
        <div className={styles.modHeader}>
          
        </div>
        <div className={styles.modBody}>

        </div>
      </div>
    </li>
  )
}

export default ProjectModule