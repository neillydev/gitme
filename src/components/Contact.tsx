import React from 'react';
import ConfusedSVG from '../../public/confused.svg';

import styles from '../../styles/Contact.module.scss';

const Contact = () => {
    return (
        <div className={styles.contactContainer}>
            <div className={styles.nothingFound}>
                <ConfusedSVG />
                <h1>Sorry, no contact information found</h1>
            </div>
        </div>
    )
};

export default Contact;