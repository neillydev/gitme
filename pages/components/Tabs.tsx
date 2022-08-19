import React from 'react'
import styles from '../../styles/Tabs.module.scss';

const Tabs = () => {
  return (
    <div className={styles.tabContainer}>
        <ul className={styles.tabList}>
            <li className={`${styles.tab} ${styles.tabSelected}`}>Overview</li>
            <li className={styles.tab}>Projects</li>
            <li className={styles.tab}>Employment</li>
        </ul>
    </div>
  )
}

export default Tabs