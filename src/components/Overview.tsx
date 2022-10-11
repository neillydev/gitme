import React from 'react';
import styles from '../../styles/Portfolio.module.scss';
import Feed from './Feed';
import Project from './Project';

//Skeleton Components
import Sk_Feed from './Skeletons/Sk_Feed';

const Overview = () => {
    return (
        <>
            <div className={styles.projectsSection}>
                <a href='https://github.com/neillydev/gitme' target='_blank'><Project /></a>
            </div>
            <Feed />
        </>
    )
};

export default Overview;