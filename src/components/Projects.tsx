import React, { useEffect, useState } from 'react';

import SearchSVG from '../../public/search.svg';
import ConfusedSVG from '../../public/confused.svg';

import styles from '../../styles/Projects.module.scss';
import ProjectModule from './ProjectModule';
import axios from 'axios';
import { useRouter } from 'next/router';

const Projects = () => {
    const router = useRouter();
    const { user_id } = router.query;
    const [projectsArray, setProjectsArray] = useState([]);

    const handleLoad = async () => {
        if (user_id && typeof user_id === 'string') {
            await axios.get(`/api/portfolio/projects/${user_id}`).then(({ data: { projects } }: any) => {
                setProjectsArray(projects);
            });
        }
    };

    const handleSearch = () => {

    };

    const handleChange = () => {

    };

    useEffect(() => {
        if(projectsArray.length === 0) handleLoad();
    }, [projectsArray])

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
                                {projectsArray.map((project: any) => <ProjectModule name={project?.name} description={project?.description} />)}
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