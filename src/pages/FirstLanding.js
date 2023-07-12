import styles from '../styles/FirstLanding.module.css';
import { useRouter } from "next/router";
import Headshot from '../../public/images/SpiessHeadshotResize.jpeg'
import React from 'react';
import Image from 'next/image'
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

const FirstLanding = () => {

    return (
            <div className={styles.body}>
                <div className={styles.mainContainer}>
                <div className={styles.mobileCol}>
                    <figure className={styles.one}>
                        <Image className={styles.image} height={350} src={Headshot} />
                    </figure>
                </div>
                <article className={styles.leftArticle}>
                    <h1 className={styles.nameHead}>
                        Nick Spiess
                    </h1>
                    <hr className={styles.line}></hr>
                    <h3 className={styles.nameInfo}>
                        Freelance Web Developer
                    </h3>
                    <h3 className={styles.nameInfo}>
                        Marathon Runner
                    </h3>
                    <h3 className={styles.nameInfo}>
                        Jiu Jitsu Practitioner
                    </h3>
                    <hr className={styles.line3}></hr>
                    <h3 className={styles.nameInfo}>
                        Based in Denver, Colorado
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
                    </div>
                </article>
                <div className={styles.col}>
                    <figure className={styles.one}>
                        <Image className={styles.image} height={350} src={Headshot} />
                    </figure>
                </div>
                </div>
            </div>
    );
};

export default FirstLanding;