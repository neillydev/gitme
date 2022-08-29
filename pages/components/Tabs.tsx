import React, { useState } from 'react'
import styles from '../../styles/Tabs.module.scss';

const Tabs = () => {
  const [selected, setSelected] = useState(0);

  return (
    <div className={styles.tabContainer}>
        <ul className={styles.tabList}>
            <li className={`${styles.tab} ${selected === 0 && styles.tabSelected}`} onClick={() => selected !== 0 && setSelected(0)}>Overview</li>
            <li className={`${styles.tab} ${selected === 1 && styles.tabSelected}`} onClick={() => selected !== 1 && setSelected(1)}>Projects</li>
            <li className={`${styles.tab} ${selected === 2 && styles.tabSelected}`} onClick={() => selected !== 2 && setSelected(2)}>Experience</li>
            <li className={`${styles.tab} ${selected === 3 && styles.tabSelected}`} onClick={() => selected !== 3 && setSelected(3)}>Contact</li>
        </ul>
    </div>
  )
}

export default Tabs