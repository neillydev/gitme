import React, { useState } from 'react';

import SearchSVG from '../../public/search.svg';

import styles from '../../styles/Projects.module.scss';

const Projects = () => {

    const handleSearch = () => {

    };

    const handleChange = () => {

    };

    return (
        <div className={styles.projectsContainer}>
            <div className={styles.searchContainer}>
                <form className={styles.searchForm} onSubmit={handleSearch}>
                    <div className={styles.searchBar}>
                        <span><SearchSVG /></span>
                        <input type="text" name="search" placeholder='Search projects...' onChange={handleChange} />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Projects;