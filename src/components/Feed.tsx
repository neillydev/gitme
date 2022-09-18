import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import moment from 'moment';

import styles from '../../styles/Feed.module.scss';
import { useRouter } from 'next/router';


const Feed = () => {
    const [commits, setCommits] = useState([]);
    const router = useRouter();
    const { user_id } = router.query;

    const handleLoad = () => {
        if (user_id && typeof user_id === 'string') {
            axios.get(`/api/portfolio/feed/${user_id.replace('@', '')}`).then(({ data }: any) => {
                setCommits(data.slice(0, 10));
            });
        }
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
                            commits.map((commit: any, index: number) =>
                                <li key={index}>
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