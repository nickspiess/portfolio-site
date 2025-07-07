import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Navbar.module.css';
import { useRouter } from 'next/router';
import Logo from '../../public/images/SpiessTechLogo.png';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      // Don't update scroll state if mobile menu is open
      if (isMobileMenuOpen) return;
      
      const currentScrollY = window.scrollY;
      const scrollThreshold = 50;

      if (currentScrollY > lastScrollY && currentScrollY > scrollThreshold) {
        setIsScrolled(true);
      } 
      else if (currentScrollY < lastScrollY) {
        if (lastScrollY - currentScrollY > 7) {
          setIsScrolled(false);
        }
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, isMobileMenuOpen]); // Add isMobileMenuOpen dependency

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [router.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      // Prevent scrolling
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      document.body.style.height = '100%';
    } else {
      // Restore scrolling
      document.body.style.overflow = 'unset';
      document.body.style.position = 'unset';
      document.body.style.width = 'unset';
      document.body.style.height = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      document.body.style.position = 'unset';
      document.body.style.width = 'unset';
      document.body.style.height = 'unset';
    };
  }, [isMobileMenuOpen]);

  // Rest of your component stays the same...
  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMobileMenuClose = () => {
    setIsMobileMenuOpen(false);
  };

  const handleMobileContainerClick = (e) => {
    if (e.target === e.currentTarget) {
      setIsMobileMenuOpen(false);
    }
  };

  const navbarClass = `${styles.navbar} 
    ${isMobileMenuOpen ? styles.mobileMenuOpen : ''} 
    ${!isScrolled ? styles.transparent : styles.solid}
  `;

  return (
    <>
      <nav className={navbarClass} data-page={router.pathname}>
        <div className={styles.logo}>
          <Link href="/" passHref>
            <div className={styles.logoDiv}>
              <Image src={Logo} alt="Logo" priority />
            </div>
          </Link>
        </div>
        
        <div className={`${styles.links} ${isMobileMenuOpen ? styles.mobileLinksOpen : ''}`}>
          <Link href='/About'>About</Link>
          <Link href='/Portfolio'>Portfolio</Link>
          <Link href='/Services'>Services</Link>
          <Link href='/Contact'>Contact</Link>
          <div className={styles.divider} />
          <Link className={styles.blog} href="/ordoabchao" passHref>Blog</Link>
          <Link href="/consultation">
            <button className={styles.startProcessBtn}>Start Process</button>
          </Link>
        </div>
        
        <div 
          className={`${styles.mobileMenuToggle} ${isMobileMenuOpen ? styles.open : ''}`} 
          onClick={handleMobileMenuToggle}
          aria-label="Toggle mobile menu"
        >
          <div className={styles.hamburger}></div>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className={styles.mobileContainer} onClick={handleMobileContainerClick}>
          <Link href='/About' onClick={handleMobileMenuClose}>About</Link>
          <Link href='/Portfolio' onClick={handleMobileMenuClose}>Portfolio</Link>
          <Link href='/Services' onClick={handleMobileMenuClose}>Services</Link>
          <Link href='/Contact' onClick={handleMobileMenuClose}>Contact</Link>
          <div className={styles.divider} />
          <Link className={styles.blog} href="/ordoabchao" onClick={handleMobileMenuClose}>Blog</Link>
          <Link href="/consultation" onClick={handleMobileMenuClose}>
            <button className={styles.startProcessBtn}>Start Process</button>
          </Link>
        </div>
      )}
    </>
  );
};

export default Navbar;