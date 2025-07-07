// components/AboutMe.js
import React, { useEffect } from 'react';
import styles from '../styles/AboutMe.module.css';

const AboutMe = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.visible);
        }
      });
    });

    const elements = document.querySelectorAll(`.${styles.fadeIn}, .${styles.slideUp}`);
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <div className={`${styles.hero} ${styles.fadeIn}`}>
        <div className={styles.heroOverlay}>
          <div className={styles.overlay}></div>
        </div>
        <h1 className={styles.heroTitle}>About Spiess Technologies</h1>
      </div>

      <div className={`${styles.contentContainer} ${styles.slideUp}`}>
        <div className={styles.contentWrapper}>
          <div className={styles.textContent}>
            <h1 className={styles.title}>About Me</h1>
            <p className={styles.description}>Hello, my name is Nick Spiess. I'm a 28 year old software developer living out near Denver, Colorado.</p>
            <p className={styles.description}>Through my experience of a decade working in full-stack software development and IT, I believe that technologies' potential is only limited by our own creative capacity.</p>
            <p className={styles.description}>Growing up in an entrepreneurial, blue-collar home, I've been inspired by the power of small business. The ability to provide goods and services to our community is what allows us to give back our unique talents to the world around us.</p>
            <p className={styles.description}>I have designed and built Spiess Technologies to enable businesses to design, create, automate and energize their online processes.  Whether you are a painter looking to splash into the local market, an IT shop looking to enhance your digital marketing, or a content-creator looking to build a brand, Spiess Technologies will enable you to reach all your digital dreams.</p>
            <p className={styles.descriptionHide}>If you'd like to get to know a little big more about me, check out my personal site and blog.</p>
          </div>
          <div className={styles.imageContainer}>
            <img 
              src="/images/SpiessHeadshotResize.jpeg" 
              alt="Nick Spiess"
              className={styles.profileImage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;