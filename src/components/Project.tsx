import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import ExtSvg from '../../public/extlink.svg';

import styles from '../../styles/Project.module.scss';

type Props = {
  profile_img: string;
  name: string;
  username: string;
  bio: string;

};

const Project = () => {
  const router = useRouter();
  const { user_id } = router.query;
  const [featuredProject, setFeaturedProject] = useState<any>();
  const [image, setImage] = useState('');

  const getRepo = async (name: string) => {
    
    return await axios.get(`/api/portfolio/projects/${user_id}/readme/${name}`).then(({ data }: any) => {
      if (data?.content?.length <= 0) return;
      const content = atob(data.content);
      const images = content.match(/(?<=src=").+?(?=")/g) || '';
      if (!images) {
        setImage('');
      }
      setImage(images[1]);
    })
  }

  const handleLoad = async () => {
    await axios.get(`/api/portfolio/projects/${user_id}`).then(async ({ data: { items } }) => {
      if (user_id === '@neillydev') {
        const [repo] = items.filter((item: any) => item.name === 'gitme');
        setFeaturedProject(repo);

        getRepo(repo.name);
      }
      else {
        if (items.length === 0) {
          setFeaturedProject(null);
          return;
        }
        let i = 0;
        const repo = items[i];
        setFeaturedProject(repo);
        getRepo(repo.name).catch(() => {
          setTimeout(() => getRepo(items[i++].name), 1000 * 3);
        });
      }
    });
  };

  useEffect(() => {
    if (!user_id) return;
    handleLoad();
  }, [user_id]);

  return (
    <div className={styles.projContainer}>
      <div className={styles.projHeader}>
        <h1>{featuredProject?.name}</h1>
        <h2>{featuredProject?.description}</h2>
      </div>
      <div className={styles.projectFooter}>
        <ExtSvg>
          <a href='http://localhost:3000' target='_blank'></a>
        </ExtSvg>
        {/*  */}
      </div>
      <div className={styles.projectOverlay}>
        <img className={styles.projectImg} src={image}></img>
      </div>
    </div>
  )
}

export default Project