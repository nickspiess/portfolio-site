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
import { React, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head'
import StructuredData from 'src/pages/StructuredData';
import Logo from '../../public/images/Logo.png'
import { Link as ScrollLink } from 'react-scroll';

const Services = () => {

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.visible);
        }
      });
    });
  
    const elements = document.querySelectorAll(
      `.${styles.videoFade}, .${styles.serviceCardsFade}, .${styles.processFade}, .${styles.pricingFade}`
    );
    elements.forEach(el => observer.observe(el));
  
    return () => observer.disconnect();
  }, []);

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
          <div className={styles.serviceHeader}>
          <Navbar />
          <div className={styles.videoWrapper}>
            <video 
              autoPlay 
              muted 
              loop 
              playsInline 
              className={`${styles.backgroundVideo} ${styles.videoFade}`}
            >
              <source src="videos/ServicesBackground.mp4" type="video/mp4" />
            </video>
            <div className={styles.videoOverlay}></div>
          </div>
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
          <div className={`${styles.serviceContainer} ${styles.serviceCardsFade}`}>
            <ServiceCards/> {/* Place the new component here */}
          </div>
          <section className={`${styles.holisticSection} ${styles.processFade}`}>
            {/* Section Header */}
            <div className={styles.sectionHeader}>
              <div className={styles.headerContent}>
                <h2 className={styles.mainTitle}>Holistic Web Solutions</h2>
                <p className={styles.subtitle}>
                  Comprehensive web solutions that connect every aspect of your digital presence
                </p>
              </div>
            </div>

            {/* Main Content Grid */}
            <div className={styles.contentGrid}>
              
              {/* Left Column - Infographic */}
              <div className={styles.visualColumn}>
                <div className={styles.imageContainer}>
                  <Image 
                    className={styles.holisticImage} 
                    src={Holistic} 
                    alt="Our holistic web development process for you, providing maximum value for you and your business" 
                    width={300} 
                    height={600}
                    priority
                  />
                </div>
              </div>

              {/* Right Column - Content */}
              <div className={styles.contentColumn}>
                
                {/* Process Overview */}
                <div className={styles.processOverview}>
                  <h3 className={styles.sectionSubtitle}>Why Holistic?</h3>
                  <p className={styles.descriptionText}>
                    We don't just build websites – we get to know you, your story, and what makes you and your service unique.<br/><br/>
                    Every element works together seamlessly to deliver exceptional results for your business.
                  </p>
                </div>

                {/* Key Benefits */}
                <div className={styles.benefitsGrid}>
                  <div className={styles.benefitCard}>
                    <div className={styles.benefitIcon}>📖</div>
                    <h4 className={styles.benefitTitle}>Your Story</h4>
                    <p className={styles.benefitDescription}>
                      We dive deep into your history, niche, and vision to craft a digital narrative that authentically represents your unique journey.
                    </p>
                  </div>

                  <div className={styles.benefitCard}>
                    <div className={styles.benefitIcon}>🎨</div>
                    <h4 className={styles.benefitTitle}>360° Brand Design</h4>
                    <p className={styles.benefitDescription}>
                      From design, to SEO, and to marketing, we build your entire online presence as a cohesive brand experience.
                    </p>
                  </div>
                  
                  <div className={styles.benefitCard}>
                    <div className={styles.benefitIcon}>🛠️</div>
                    <h4 className={styles.benefitTitle}>Integrative Development</h4>
                    <p className={styles.benefitDescription}>
                      Custom-fitted solutions using diverse tools and technologies that perfectly align with your business needs.
                    </p>
                  </div>
                  
                  <div className={styles.benefitCard}>
                    <div className={styles.benefitIcon}>🌱</div>
                    <h4 className={styles.benefitTitle}>Continuous<br/>Growth</h4>
                    <p className={styles.benefitDescription}>
                      Ongoing support, iterative improvements, and design evolution that keeps your brand ahead of the curve.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Call to Action */}
            <div className={styles.ctaContainer}>
                  <button className={styles.primaryCta}>
                    <Link href="/consultation" className={styles.ctaLink}>
                      Start your Project
                    </Link>
                  </button>
                  <button className={styles.secondaryCta}>
                    <Link href="/Portfolio" className={styles.ctaLink}>
                      View Our Work
                    </Link>
                  </button>
                </div>

            {/* Video Section */}
            <div className={styles.videoSection}>
              <div className={styles.videoHeader}>
                <h3 className={styles.videoTitle}>See Our Process in Action</h3>
                <p className={styles.videoSubtitle}>
                  Watch how we transform ideas into powerful digital solutions
                </p>
              </div>
              
              <div className={styles.specialsVideoWrapper}>
                <div className={styles.videoContainer}>
                  <iframe 
                    className={styles.videoIframe}
                    width="560" 
                    height="315" 
                    src="https://www.youtube.com/embed/GfwYdfgk8cc?si=85y9wmkgh2lsMP8c" 
                    title="Holistic Web Solutions Process" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen
                  />
                </div>
              </div>
            </div>

            {/* Process Steps */}
            <div className={styles.processSteps}>
              <h3 className={styles.stepsTitle}>Our 4-Phase Process</h3>
              <div className={styles.stepsGrid}>
                
                <div className={styles.stepCard}>
                  <div className={styles.stepNumber}>01</div>
                  <h4 className={styles.stepTitle}>Discovery</h4>
                  <p className={styles.stepDescription}>
                    Understanding your business, goals, and target audience
                  </p>
                </div>
                
                <div className={styles.stepCard}>
                  <div className={styles.stepNumber}>02</div>
                  <h4 className={styles.stepTitle}>Strategy</h4>
                  <p className={styles.stepDescription}>
                    Creating a comprehensive plan for your digital success
                  </p>
                </div>
                
                <div className={styles.stepCard}>
                  <div className={styles.stepNumber}>03</div>
                  <h4 className={styles.stepTitle}>Development</h4>
                  <p className={styles.stepDescription}>
                    Building your solution with cutting-edge technology
                  </p>
                </div>
                
                <div className={styles.stepCard}>
                  <div className={styles.stepNumber}>04</div>
                  <h4 className={styles.stepTitle}>Growth</h4>
                  <p className={styles.stepDescription}>
                    Ongoing optimization and scaling for continued success
                  </p>
                </div>
              </div>
            </div>
          </section>
          <div className={`${styles.pricesContainer} ${styles.pricingFade}`}>
            <header className={styles.pricingHeader}>Our Prices</header>
            <PricingPackages />
          </div>
          <Footer />
          </div>
      </div>
    </>
  );
};

export default Services;
