

import React from 'react';
import styles from '../styles/AboutLanding.module.css';
import Image from 'next/image'
import Logo from '../../public/images/Logo.png';


const AboutLanding = () => {
  return (
    <section className={styles.aboutSection}>
      <h1 className={styles.aboutTitle}>About Spiess Technologies</h1>
      <div className={styles.imgContainer}>
        <Image className={styles.img} src={Logo} height={200} width={300} alt="Logo" />
      </div>
      <article className={styles.paragraphContainer}>
      <p className={styles.aboutDescription}>At Spiess Technologies, we believe in the power of small business to change the world around us.</p>
      <p className={styles.aboutDescription}>We are more than just a web solutions provider, we are your end-to-end partner in establishing a formidable digital footprint, encompassing everything from web and mobile development to cloud solutions and SEO strategies.</p>
      <p className={styles.aboutDescription}>Our particular emphasis is on amplifying your online presence and driving high-quality traffic to your platforms. With our specialized techniques, you won't just be another business on the web; you'll be a must-visit destination for your target audience.</p>
      </article>
    </section>
  );
};

export default AboutLanding;