import Link from 'next/link';
import React from 'react';

import ProjectSVG from '../../public/album.svg';
import ExtLinkSVG from '../../public/extlink.svg';
import GithubSmSVG from '../../public/github_sm.svg';

import styles from '../../styles/ProjectModule.module.scss';

type Props = {
  name: string;
  description: string;
  html_url: string;
  homepage_url: string;
};

const ProjectModule = ({
  name,
  description,
  html_url,
  homepage_url
}: Props) => {
  return (
    <li className={styles.modContainer}>
      <div className={styles.modWrapper}>
        <div className={styles.modHead}>
          <div className={styles.modLeft}>
            <ProjectSVG />
          </div>
          <div className={styles.modRight}>
            <Link href={homepage_url}>
              <a target='_blank'>
                <ExtLinkSVG className={styles.modSVG} />
              </a>
            </Link>
            <Link href={html_url}>
              <a target='_blank'>
                <GithubSmSVG className={styles.modSVG} />
              </a>
            </Link>
          </div>
        </div>
        <div className={styles.modHeader}>
          <h1>{name}</h1>
          <h2>{description}</h2>
        </div>
        <div className={styles.modFooter}>

        </div>
      </div>
    </li>
  )
}

export default ProjectModule