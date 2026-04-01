import Image from 'next/image';
import { motion } from 'framer-motion';
import Navbar from './Navbar'
import Works from './Works';
import Experience from './Experience';
import Footer from './Footer'
import styles from '../styles/Portfolio.module.css';
import React from 'react';
import Head from 'next/head'
import StructuredData from './StructuredData';

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay },
});



const Portfolio = () => {

    
    const structuredData =  {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "Spiess Tech's Portfolio",
        "url": "https://spiess.tech/Portfolio",
        "description": "Check out the work and visions we have brought to life.",
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
                <title>Portfolio - Spiess Technologies</title>
                <meta name="description" content='Check out the portfolio of our work.' />
                <meta property="og:title" content="Spiess Technologies Portfolio" />
                <meta property="og:description" content='Check out the portfolio of our work.'/>
                <meta property="og:image" content={'/images/Logo.png'}/>
                <meta property="og:url" content={`https://spiess.tech/Portfolio`} />
                <meta name="robots" content="index,follow" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Spiess Technologies Portfolio" />
                <meta name="twitter:description" content='Check out the portfolio of our work.' />
                <meta name="twitter:image" content={'/images/Logo.png'} />
                <link rel="canonical" href={`https://spiess.tech/Portfolio`} />
            </Head>
            
        <StructuredData data={structuredData} />
            <div className={styles.background}>
            <Navbar />
            <div className={styles.heroSection}>
                <div className={styles.heroContent}>
                    <motion.p {...fade(0)} className={styles.heroLabel}>Portfolio</motion.p>
                    <motion.h1 {...fade(0.1)} className={styles.heroTitle}>Work and visions brought to life</motion.h1>
                    <motion.p {...fade(0.2)} className={styles.heroSubtitle}>Custom-built projects for businesses that wanted something real.</motion.p>
                </div>
            </div>
                <Works />
                <Experience />
            <Footer />
            </div>
        
        </>
        );
    };
    
export default Portfolio;
    