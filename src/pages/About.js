import styles from '../styles/AboutPage.module.css';
import AboutMe from './AboutMe';
import PhotoGallery from './PhotoGallery';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Navbar from './Navbar';
import Footer from './Footer';
//import Stars from '../../public/images/Stars.mov';

const About = () => {
    
    

    return (
        <>
                <div className={styles.content}> {/* Add this line */}
                
                <Navbar />
            <div className={styles.aboutContainer}>
                <AboutMe />
            </div>
            <div className={styles.galleryContainer}>
                <PhotoGallery />
            </div>
            <div className={styles.overlayWrapper}>
                <Footer />
            </div>
            </div>
        </>
      );
};

export default About;