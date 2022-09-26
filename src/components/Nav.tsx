import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import styles from '../../styles/Nav.module.scss';
import Github from '../../public/github.svg';

const Nav = () => {
    const router = useRouter();
    const [path, setPath] = useState('/@neillydev');

    const handleChange = ((e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault();
        setPath(`/@${e.currentTarget.value}`);
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        router.push({
            pathname: path,
        })
    }

    return (
        <header className={`${styles.navHeader}`}>
            <nav className={styles.nav}>
                <div className={styles.navLogo}>
                    <a href='/'>
                        Git<span>Me_</span>
                    </a>
                </div>
                <form className={styles.navCenter} onSubmit={handleSubmit}>
                    <div className={styles.navSearch}>
                        <span>@</span>
                        <input type="text" name="search" placeholder='neillydev' onChange={handleChange} />
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