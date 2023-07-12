import { useRouter } from "next/router";
import React from 'react';
import Image from 'next/image'
import ExperienceTile from './ExperienceTile';
import styles from '../styles/Works.module.css'

const Works = () => {
  const experiences = [
    {
      title: 'Spiess Carpet Cleaning',
      summary: 'This is a web app, built using React and Nextjs, for a small business located in Minnesota. This project was near to me as I worked for this company growing up, so it was surreal to be able to build a site for something so close to him.',
      image: '/images/logo copy.png',
      link: 'www.spiesscarpet.com',
    },
    {
      title: 'Run It',
      summary: 'An automated marathon training platform.. coming soon!',
      image: '/images/RunIt.png',
      link: '#',
    },
    // Add more experiences here...
  ];

return (
    <>
    <section id='works' className={styles.mainContainer}>
        <header className={styles.head}>
            <h3 className={styles.headText}>Projects</h3>
        </header>
        <div className={styles.secondaryContainer}>
        <div className={`${styles.floating2} ${styles.tileContainer}`}>
        {experiences.map((experience, index) => (
            <ExperienceTile key={index} {...experience} />
        ))}
        </div>
        </div>
    </section>
    </>
  );
};

export default Works;