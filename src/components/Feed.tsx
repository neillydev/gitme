import React, { useEffect, useState } from 'react';
import axios from 'axios';

import styles from '../../styles/Feed.module.scss';

const Feed = () => {
    const [commits, setCommits] = useState([]);

    const handleLoad = () => {
        axios.get('').then((data: any) => {
            
        });
    }

    useEffect(() => {
        if(!commits) handleLoad();
    }, []);

    return (
        <div className={styles.feedSection}>
            <div className={styles.feedContainer}>
                <div className={styles.feedHeader}>
                    <h2>Commit Feed</h2>
                    <span className={styles.live}>Live</span>
                </div>
                <div className={styles.feedBody}>
                    
                </div>
            </div>
        </div>
    )
}

export default Feed;