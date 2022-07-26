import Link from 'next/link';
import React from 'react';
import styles from '../../styles/Nav.module.scss';
import NavItem from './NavItem';
import Github from '../../public/github.svg';

const Nav = () => {
    return (
        <header className={`${styles.navHeader}`}>
            <nav className={styles.nav}>
                <div className={styles.navLogo}>
                    <a href='/'>
                        Git<span>Me_</span>
                    </a>
                </div>
                <form className={styles.navCenter}>
                    <div className={styles.navSearch}>
                        <span>@</span>
                        <input type="text" name="search" placeholder='neillydev' />
                    </div>
                </form>
                <div className={styles.navEnd}>
                    <a href='https://github.com/neillydev/gitme' target='_blank'>
                        <span className={styles.navGH}>
                            {/* <img src="/github.svg" alt="GitMe Repository" /> */}
                            <Github />
                            GitHub
                        </span>
                    </a>
                </div>
            </nav>
        </header>
    )
}

export default Nav