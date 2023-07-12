import React from 'react';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import styles from '../styles/Footer.module.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import Link from 'next/link';
import Facebook from '../../public/images/FacebookLink.png'
import Twitter from '../../public/images/TwitterLink.png'
import Insta from '../../public/images/InstaLink.png'
import LinkedIn from '../../public/images/LinkedInLink.png'
import GitHub from '../../public/images/GitHubLink.png'
import Image from 'next/image'

const Footer = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.socialMedia}>
        <a href="https://www.github.com/nickspiess" target="_blank" rel="noopener noreferrer" className={`${styles.floating} ${styles.icon}`}>
          <Image src={GitHub} width={30} />
        </a>
        <a href="https://www.twitter.com/realnickspiess" target="_blank" rel="noopener noreferrer" className={`${styles.floating2} ${styles.icon}`}>
          <Image src={Twitter} width={30} />
        </a>
        <a href="https://www.linkedin.com/realnickspiess" target="_blank" rel="noopener noreferrer" className={`${styles.floating3} ${styles.icon}`}>
          <Image src={LinkedIn} width={30} />
        </a>
        <a href="https://www.instagram.com/realnickspiess" target="_blank" rel="noopener noreferrer" className={`${styles.floating4} ${styles.icon}`}>
          <Image src={Insta} width={30} />
        </a>
        <a href="https://www.facebook.com/realnickspiess" target="_blank" rel="noopener noreferrer" className={`${styles.floating2} ${styles.icon}`}>
          <Image src={Facebook} width={30} />
        </a>
      </div>
      <div className={styles.navigation}>
        <ScrollLink to="about" smooth={true} duration={500} className={styles.link}>
          About
        </ScrollLink>
        <ScrollLink to="experience" smooth={true} duration={500} className={styles.link}>
          Experience
        </ScrollLink>
        <ScrollLink to="works" smooth={true} duration={500} className={styles.link}>
          Works
        </ScrollLink>
        <ScrollLink to="contact" smooth={true} duration={500} className={styles.link}>
          Contact
        </ScrollLink>
        <Link className={styles.blog} href="/blog">
          <p className={styles.link}>Blog</p>
        </Link>
      </div>
      <div className={styles.name} onClick={scrollToTop}>
        <p>&copy;2023 Nick Spiess | All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
