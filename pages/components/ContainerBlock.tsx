import React from "react";
import Head from "next/head";
import Nav from './Nav';
import { useRouter } from "next/router";

import styles from '../../styles/main.module.scss';

export default function ContainerBlock({ children, ...customMeta }: any) {
    const router = useRouter();

    const meta = {
        title: "Git Me",
        description: `The Modern Developer's Portfolio`,
        image: "/avatar.png",
        type: "website",
        ...customMeta,
    };
    return (
        <div>
            <Head>
                <title>{meta.title}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="robots" content="follow, index" />
                <meta content={meta.description} name="description" />
                <meta
                    property="og:url"
                    content={``}
                />
                <link
                    rel="canonical"
                    href={``}
                />
                <link rel="icon" type="image/png" href="/gitme.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap" 
                rel="stylesheet" />
                <meta property="og:type" content={meta.type} />
                <meta property="og:site_name" content="Git Me" />
                <meta property="og:description" content={meta.description} />
                <meta property="og:title" content={meta.title} />
                <meta property="og:image" content={meta.image} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@neillydev" />
                <meta name="twitter:title" content={meta.title} />
                <meta name="twitter:description" content={meta.description} />
                <meta name="twitter:image" content={meta.image} />
                {meta.date && (
                    <meta property="article:published_time" content={meta.date} />
                )}
            </Head>
            <div className="containerBlock">
                <Nav />
                {/* {navOpen ? <HamburgerMenu /> : null} */}
                <div className="mainContent">
                    <main className={styles.mainContainer}>
                        {children}
                    </main>
                </div>

            </div>
        </div>
    );
}