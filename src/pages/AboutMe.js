// components/AboutMe.js
import React from 'react';
import styles from '../styles/AboutMe.module.css';

const AboutMe = () => {
  return (
    <div className={styles.aboutMe}>
      <h1 className={styles.title}>About Me</h1>
      <p className={styles.description}>Hello, my name is Nick Spiess.  I'm a 26 year old software developer living out near Denver, Colorado.</p>
      <p className={styles.description}>I've been working in software and IT for nearly 7 years now and I love it.  I believe that technologies' potential is only limited to our creative capacity and that these tools can enable us and provide value in ways we haven't dreamed of yet.</p>
      <p className={styles.description}>I mainly specialize in Web Development and Quality Assurance.  I enjoy building products from start to finish and enjoy making sure systems and processes are working correctly.</p>    
      <p className={styles.description}>Outside of my career, I am extremely active.  I have ran a few marathons, qualifying for the Boston Marathon once, and am a blue belt in Brazilian Jiu Jitsu.  I love the physical rush of competition and seek to push my limits in all areas.</p>
      <p className={styles.description}>I am also in the process of joining the Eastern Orthodox Christian church.  I was a wanderer in this regard when I was younger, but as I grew older, I was extremely attracted to the mystical nature of the Orthodox traditions and can see my faith growing stronger each day.</p>
    </div>
  );
};

export default AboutMe;
