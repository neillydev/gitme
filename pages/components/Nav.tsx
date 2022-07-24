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
                        GitMe_
                    </a>
                </div>
                <div className={styles.navList}>
                    <ul>
                        {/* <NavItem destination='/' itemText='' /> */}
                    </ul>
                </div>
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