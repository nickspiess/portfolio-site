import React from 'react';
import FirstLanding from './FirstLanding'
import Experience from './Experience';
import ServiceComponent from './ServiceComponent';
import Works from './Works';
import AboutLanding from './AboutLanding'
import ContactForm from './ContactForm'
import Footer from './Footer'
import Navbar from './Navbar'
//import Highlights from './Highlights'
import Link from 'next/link';
import Head from 'next/head'
import styles from '../styles/Main.module.css'
import StructuredData from 'src/pages/StructuredData';
//import BackgroundPhoto from '../../public/images/mountainBackdrop.jpeg'

export default class extends React.Component {
    
   

  render() {
    const sectionIds = ['about', 'experience', 'work', 'contact'];


    const structuredData =  {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "Spiess Technologies",
      "url": "https://spiess.tech/",
      "description": "Empower your business with Spiess Technologies – your partner in crafting holistic web solutions designed to boost online traffic and create stunning websites. Specializing in helping small and medium-sized businesses thrive online. Let's build your digital success story today!",
      "address": {
          "@type": "PostalAddress",
          "streetAddress": "995 Cobblestone Drive",
          "addressLocality": "Highlands Ranch",
          "addressRegion": "CO",
          "postalCode": "80126",
          "addressCountry": "US",
      },
      "telephone": "+1-651-216-9512",
      "openingHours": "Mo-Fr 07:00-17:00",
      "sameAs": [
          "https://www.x.com/realnickspiess",
          "https://www.twitter.com/realnickspiess",
          "https://www.linkedin.com/company/spiess-technologies",
      ]
  };


      return (
        <>
            <Head>
                <title>Spiess Technologies</title>
                <meta name="description" content='Your partner in expanding your digital footprint.' />
                <meta property="og:title" content='Spiess Technologies' />
                <meta property="og:description" content='Your partner in expanding your digital footprint.'/>
                <meta property="og:image" content={'/images/Logo.png'}  />
                <meta property="og:url" content={`https://spiess.tech`} />
                <meta name="robots" content="index,follow" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Spiess Technologies" />
                <meta name="twitter:description" content='Your partner in expanding your digital footprint.' />
                <meta name="twitter:image" content={'/images/Logo.png'} />
                <link rel="canonical" href={`https://spiess.tech`} />
            </Head>
            
        <StructuredData data={structuredData} />
            <div className="body">
                <div className="background-photo" />
                <div className="wrapper">
                    <Navbar />
                    <FirstLanding />
                    <div className={styles.gradientBackground}>
                        <ServiceComponent />
                        <AboutLanding />
                        <div className={styles.contactContainer}>
                            <ContactForm />
                        </div>
                        <Footer />
                    </div>
                </div>
            </div>
        </>
      )
    }
  }
