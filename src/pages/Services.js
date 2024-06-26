import Link from 'next/link';
import Image from 'next/image';
import Navbar from './Navbar';
import Works from './Works';
import Experience from './Experience';
import Footer from './Footer';
import Holistic from '../../public/images/Holistic.png'
import PricingPackages from './PricingPackage';
import styles from '../styles/ServicePage.module.css';
import ServiceCards from './ServiceCards'; // Import the new component
import { React } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head'
import StructuredData from 'src/pages/StructuredData';
import Logo from '../../public/images/Logo.png'

const Services = () => {

  const router = useRouter();

  const handleButtonClick = () => {
    // Use the router.push method inside the handler
    router.push('/Contact');
  };

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
            <title>Spiess Tech Services</title>
            
                <meta name="description" content='Our services to expand your digital footprint.' />
                <meta property="og:title" content="Spiess Tech Services" />
                <meta property="og:description" content='Our services to expand your digital footprint.'/>
                <meta property="og:image" content={'/images/Logo.png'}  />
                <meta property="og:url" content={`https://spiess.tech/Services`} />
                <meta name="robots" content="index,follow" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Spiess Technologies Services" />
                <meta name="twitter:description" content='Our services to expand your digital footprint.' />
                <meta name="twitter:image" content={'/images/Logo.png'} />
                <link rel="canonical" href={`https://spiess.tech/Services`} />
        </Head>
        <StructuredData data={structuredData} />
      <div className={styles.background}>
        <div className={styles.servicePage}>
          <div className={styles.serviceHeader}>
          <Navbar />
            <p className={styles.serviceText}>
              Holistic Web Solutions<br />for your Craft
            </p>
            <div className={styles.buttonContainer}>
            <button className={styles.headerButton} onClick={handleButtonClick}>
      Schedule Services
    </button>
            </div>
          </div>
          <div className={styles.content}>
            <header className={styles.cardHeader}>
              <h2 className={styles.cardHeaderText}>
                Our Specialties
              </h2>
            </header>
          <div className={styles.serviceContainer}>
            <ServiceCards/> {/* Place the new component here */}
          </div>
          <div className={styles.processContainer}>
            <div className={styles.headerContainer}>
              <header className={styles.processHeader}>Our Process</header>
            </div>
              <div className={styles.contentContainer}>
              <div className={styles.infographicContainer}>
                <Image className={styles.image} src={Holistic} alt="Our holistic web development process for you, providing maximum value for you and your business" width={800} height={700} />
              </div>
              <div className={styles.videoContainer}>
                <article className={styles.video}>
                <iframe className={styles.iframe} width="560" height="315" src="https://www.youtube.com/embed/GfwYdfgk8cc?si=85y9wmkgh2lsMP8c" title="Holistic Web Solutions" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                  </article>
              </div>
              </div>
            </div>
          <div className={styles.pricesContainer}>
            <header className={styles.pricingHeader}>Our Prices</header>
            <PricingPackages />
          </div>
          <Footer />
          </div>
          </div>
      </div>
    </>
  );
};

export default Services;
