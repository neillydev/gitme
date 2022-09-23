import React, { useState } from 'react';

import SearchSVG from '../../public/search.svg';
import ConfusedSVG from '../../public/confused.svg';

import styles from '../../styles/Projects.module.scss';
import ProjectModule from './ProjectModule';

const Projects = () => {
    const [projectsArray, setProjectsArray] = useState(['test']);

    const handleSearch = () => {

    };

    const handleChange = () => {

    };

    return (
        <div className={styles.projectsContainer}>
            <div className={styles.projectsWrapper}>
                <form className={styles.searchForm} onSubmit={handleSearch}>
                    <div className={styles.searchBar}>
                        <span><SearchSVG /></span>
                        <input type="text" name="search" placeholder='Search projects...' onChange={handleChange} />
                    </div>
                </form>
                <div className={styles.projectsBody}>
                    {
                        projectsArray.length > 0 ? 
                        <ul className={styles.projectsList}>
                            <ProjectModule />
                            <ProjectModule />
                            <ProjectModule />
                            <ProjectModule />
                            <ProjectModule />
                            <ProjectModule />
                        </ul>
                            :
                            <div className={styles.nothingFound}>
                                <ConfusedSVG />
                                <h1>Sorry, no projects found</h1>
                            </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Projects;