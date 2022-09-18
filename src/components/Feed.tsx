import React, { useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment';

import styles from '../../styles/Feed.module.scss';

const Feed = () => {
    const [commits, setCommits] = useState([]);

    const handleLoad = () => {
        axios.get('/api/portfolio/feed').then(({ data }: any) => {
            console.log(data)
            setCommits(data.slice(0, 10));
        });
    }

    useEffect(() => {
        if (commits.length === 0) handleLoad();
    }, []);

    return (
        <div className={styles.feedSection}>
            <div className={styles.feedContainer}>
                <div className={styles.feedHeader}>
                    <h2>Commit Feed</h2>
                    <span className={styles.live}>Live</span>
                </div>
                <div className={styles.feedBody}>
                    <ul>
                        {
                            commits.map((commit: any) =>
                                <li>
                                    <div className={styles.commitDot}></div>
                                    <div className={styles.commitBody}>
                                        <div className={styles.commitDate}>{moment(commit.committer.date).fromNow()}</div>
                                        <div className={styles.commitMessage}>{commit.message}</div>
                                    </div>
                                </li>
                            )
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Feed;