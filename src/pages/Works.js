import { useRouter } from "next/router";
import React from 'react';
import Image from 'next/image'
import ExperienceTile from './ExperienceTile';
import styles from '../styles/Works.module.css'

const Works = () => {
  const experiences = [
    {
      title: 'Wealth Planning Advisors',
      summary: 'A full logo/brand design and implementation. Design work done in Figma and fully custom code using HTML/CSS, JS, and PHP implemented in Wordpress',
      image: '/images/Depth_Large.png',
      link: 'www.wpadvisorsgroup.com',
    },
    {
      title: 'Spiess Carpet Cleaning',
      summary: 'This is a web app, built using React and Nextjs, for a small business located in Minnesota. This was a project very close to home since it was the first company I ever worked for.',
      image: '/images/logo copy.png',
      link: 'www.spiesscarpet.com',
    },
    {
      title: 'Preece Financial Planning',
      summary: 'Web Design overhaul for Preece Financial Planning, bringing their website to life through modern design principles.',
      image: '/images/transparentPFP.png',
      link: 'www.preecefp.com',
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
    <header className={styles.header}> 
          <h2 className={styles.head2}>Portfolio</h2>
      </header>
        <div className={`${styles.tileContainer}`}>
        {experiences.map((experience, index) => (
            <ExperienceTile key={index} {...experience} />
        ))}
        </div>
    </section>
    </>
  );
};

export default Works;