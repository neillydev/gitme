import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import styles from '../../styles/Nav.module.scss';
import Github from '../../public/github.svg';

const Nav = () => {
    const router = useRouter();
    const [path, setPath] = useState('/@neillydev');

    return (
        <header className={`${styles.navHeader}`}>
            <nav className={styles.nav}>
                <div className={styles.navLogo}>
                    <a href='/'>
                        Git<span>Me_</span>
                    </a>
                </div>
                <div className={styles.navEnd}>
                    <a href='https://github.com/neillydev/gitme' target='_blank'>
                        <span className={styles.navGH}>
                            {/* <img src="/github.svg" alt="GitMe Repository" /> */}
                            <Github />
                        </span>
                    </a>
                </div>
            </nav>
        </header>
    )
}

export default Nav