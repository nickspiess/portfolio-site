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
            <video
            autoPlay 
            muted 
            loop 
            playsInline 
            className={styles.backgroundVideo}
            ref={(video) => {
              if (video) video.playbackRate = 0.8; // 70% speed
            }}>
                <source src="/videos/BackgroundVid.mov" type="video/quicktime" />
                <source src="/videos/BackgroundVid.mp4" type="video/mp4" />
            </video>
            <div className={styles.videoOverlay}></div>
            <div className={styles.mainContainer}>
                <article className={styles.leftArticle}>
                    <h1 className={styles.nameHead}>
                        Crafting Your Brand's Online Presence
                    </h1>
                </article>
                <div className={styles.rightArticle}>
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
                            <Link href='/Portfolio'>
                                Portfolio
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FirstLanding;