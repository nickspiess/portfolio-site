

import Link from 'next/link';
import Image from 'next/image';
import Navbar from './Navbar'
import ContactForm from './ContactForm';
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
                    Contact Spiess Tech
                </title>
            </Head>

        <StructuredData data={structuredData} />
            <div className={styles.background}>
            <Navbar />
            <div className={styles.contactFormContainer}>
                <ContactForm />
            </div>
            <Footer />
            </div>
        
        </>
        );
    };
    
export default Contact;