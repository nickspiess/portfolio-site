
import Navbar from './Navbar'
import ContactFormPage from './ContactFormPage';
import Footer from './Footer'
import styles from '../styles/ContactPage.module.css';
import React from 'react';
import Head from 'next/head'
import StructuredData from 'src/pages/StructuredData';


const Contact = () => {

    const structuredData =  {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "Spiess Technologies",
        "url": "https://spiess.tech/services",
        "description": "Learn about the services to maximize your digital footprint.",
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
                <title>
                    Contact Spiess Technologies
                </title>
                <meta name="description" content='Contact us today for a free consultation.' />
                <meta property="og:title" content="Contact Spiess Technologies" />
                <meta property="og:description" content='Contact us today for a free consultation.'/>
                <meta property="og:image" content={'/images/Logo.png'}  />
                <meta property="og:url" content={`https://spiess.tech/Contact`} />
                <meta name="robots" content="index,follow" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Contact Spiess Technologies" />
                <meta name="twitter:description" content='Contact us today for a free consultation.' />
                <meta name="twitter:image" content={'/images/Logo.png'} />
                <link rel="canonical" href={`https://spiess.tech/Contact`} />
            </Head>

        <StructuredData data={structuredData} />
            <div className={styles.background}>
            <Navbar />
            <div className={styles.contactFormContainer}>
                <ContactFormPage />
            </div>
            <Footer />
            </div>
        
        </>
        );
    };
    
export default Contact;