import styles from '../styles/About.module.css';
import { useRouter } from "next/router";
import Headshot from '../../public/images/SpiessHeadshotResize.jpeg'
import React from 'react';
import Image from 'next/image'

const About = () => {

    return (
        <>
            <section id="about" className={styles.mainContainer}>
                <header className={styles.header}>
                    <h1 className={styles.head}>About Me</h1>
                </header>
                <article className={styles.aboutInfo}>
                    <p>Hello, my name is Nick Spiess.  I'm a web developer living out in Denver, Colorado and I have a passion for creating clean and simple software.
                        <br /><br />I specialize in building web applications for small businesses and enjoy getting to know organizations and their histories.
                        <br /><br />My main hobbies entail distance running, brazilian jiu jitsu, and being outside to enjoy all Colorado has to offer.
                    </p>
                </article>
            </section>
        </>
    );
};

export default About;