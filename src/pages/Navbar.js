import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Navbar.module.css';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import Logo from '../../public/images/Logo.png';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`${styles.navbar} ${isMobileMenuOpen ? styles.mobileMenuOpen : ''}`}>
      <div className={styles.logo}>
        <Link href="/" passHref>
          <div className={styles.logoDiv}>
            <Image src={Logo} alt="Logo" />
          </div>
        </Link>
      </div>
      <div className={`${styles.links} ${isMobileMenuOpen ? styles.mobileLinksOpen : ''}`}>
      <Link href='/About' >
          About
       </Link>
       <Link href='/Portfolio' >
           Portfolio
        </Link>
        <Link href='/Services' >
           Services
        </Link>
        <Link href='/Contact' >
          Contact
        </Link>
        <div className={styles.divider} />
        <Link className={styles.blog}  href="/ordoabchao" passHref>
          <p onClick={handleMobileMenuToggle}>Blog</p>
        </Link>
      </div>
      <div className={styles.mobileMenuToggle} onClick={handleMobileMenuToggle}>
        <div className={`${styles.hamburger} ${isMobileMenuOpen ? styles.open : ''}`}></div>
      </div>
      {isMobileMenuOpen && (
        <div className={`${styles.mobileContainer} ${styles.mobileContainerOpen}`}>
          <Link href='/About' >
          About
       </Link>
       <Link href='/Portfolio' >
           Portfolio
        </Link>
        <Link href='/Services' >
           Services
        </Link>
        <Link href='/Contact' >
          Contact
        </Link>
          <div className={styles.divider} />
          <Link className={styles.blog} href="/ordoabchao" passHref>
            <p onClick={handleMobileMenuToggle}>Blog</p>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
