import styles from '../styles/AboutPage.module.css';
import AboutMe from './AboutMe';
import PhotoGallery from './PhotoGallery';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Navbar from './Navbar';
import Footer from './Footer';
//import Stars from '../../public/images/Stars.mov';
import Head from 'next/head'
import StructuredData from 'src/pages/StructuredData';

const About = () => {
    
    const structuredData =  {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "Spiess Technologies",
        "url": "https://spiess.tech/about",
        "description": "Learn about the mission and roots of Spiess Technologies.",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "995 Cobblestone Drive",
            "addressLocality": "Highlands Ranch",
            "addressRegion": "CO",
            "postalCode": "80126",
            "addressCountry": "US",
        },
    };

    return (
        <>
        <Head>
            <title>About Spiess Technologies</title>
        </Head>
        <StructuredData data={structuredData} />
            <div className={styles.content}>
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