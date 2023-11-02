import styles from '../styles/FirstLanding.module.css';
import { useRouter } from "next/router";
import Headshot from '../../public/images/SpiessHeadshotResize.jpeg'
import React from 'react';
import Image from 'next/image'
import Link from 'next/link'
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

const FirstLanding = () => {

    return (
            <div className={styles.body}>
                <div className={styles.mainContainer}>
                <article className={styles.leftArticle}>
                    <h1 className={styles.nameHead}>
                        Web Solutions that Speak Your Language
                    </h1>
                    <hr className={styles.line}></hr>
                    <h3 className={styles.nameInfo}>
                        Based in Denver, Colorado
                    </h3>
                    <hr className={styles.line3}></hr>
                    <h3 className={styles.nameInfo2}>
                        Working Everywhere
                    </h3>
                    <hr className={styles.line2}></hr>
                    <div className={styles.buttonContainer}>
                        <button className={styles.button}>
                        <ScrollLink
                            to="contact"
                            smooth={true}
                            duration={500}
                            className={styles.link}
                        >
                            Lets Connect
                        </ScrollLink>
                        </button>
                        <button className={styles.button}>
                            <Link href='/Portfolio' >
                                Portfolio
                            </Link>
                        </button>
                    </div>
                </article>
                </div>
            </div>
    );
};

export default FirstLanding;