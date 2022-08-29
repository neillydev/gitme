import React from 'react';
import ConfusedSVG from '../../public/confused.svg';

import styles from '../../styles/Experience.module.scss';

const Experience = () => {
    return (
        <div className={styles.experienceContainer}>
            <div className={styles.nothingFound}>
                <ConfusedSVG />
                <h1>Sorry, no experience found</h1>
            </div>
        </div>
    )
}

export default Experience