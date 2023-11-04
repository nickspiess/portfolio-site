
import React, { useState } from 'react';
import styles from "../styles/Services.module.css";
import Link from "next/link";
import Image from 'next/image';
import Business from '../../public/images/Business.jpeg'
import Individual from '../../public/images/Individual.jpeg'
import StartUp from '../../public/images/StartUp.jpeg'
import { useRouter } from 'next/router';


const ServiceCard = ({ title, subtitle, listItems, quote, link, img, alt }) => {

  const router = useRouter();

    const [isFlipped, setIsFlipped] = useState(false);
  
    return (
      <div className={styles.pullInCard} onMouseEnter={() => setIsFlipped(true)} onMouseLeave={() => setIsFlipped(false)}>
        <div className={`${styles.cardInner} ${isFlipped ? styles.isFlipped : ""}`}>
          <div className={styles.cardFront}>
            <h2 className={styles.cardTitle}>{title}</h2>
            
            <Image className={styles.img}
              src={img} // The path of the image file
              alt={alt} // Alternative text for the image
              width={300} // Width of the image in pixels
              height={300} // Height of the image in pixels
            />
            
            <p className={styles.cardQuote}>{quote}</p>
          </div>
          <div className={styles.cardBack}>
            <div className={styles.backContainer}>
              <h3 className={styles.cardSubtitle}>{subtitle}</h3>
              <ul className={styles.cardList}>
                {listItems.map((item, index) => (
                  <li className={styles.listItem} key={index} dangerouslySetInnerHTML={{ __html: item }}></li>
                ))}
              </ul>
              <button className={styles.learnMore} onClick={() => router.push(link)}>
                Learn More
              </button>
              </div>
          </div>
        </div>
      </div>
    );
  };
  
  const ServiceComponent = () => {
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>Our Services</h1>
        <div className={styles.services}>
          <ServiceCard
            title="Businesses"
            subtitle="Comprehensive Digital Solutions for Enterprises"
            listItems={[
              "<strong>Web Development</strong>: <br/>Scalable and secure web apps.",
              "<br/><strong>E-commerce Solutions</strong>: <br/>Robust & Dynamic online stores.",
              "<br/><strong>SEO Footprint</strong>: <br/>Optimize your online presence.",
              "<br/><strong>Maintenance and Support</strong>: <br/>Maintain Smooth Digital Operations."
            ]}
            quote="📈 Boost your business's ROI with our holistic digital solutions."
            link="/Services"
            img={Business}
            alt="Providing Solutions for Businesses of any size"
          />
          <ServiceCard
            title="Startups"
            subtitle="Tailor-made Services for Emerging Businesses"
            listItems={[
              "<strong>Web Development</strong>: <br/>MVPs and full-stack solutions",
              "<br/><strong>Mobile App Development</strong>: <br/>Capture the mobile audience.",
              "<br/><strong>E-commerce Solutions</strong>: <br/>Start selling online quickly.",
              "<br/><strong>SEO Footprint</strong>: <br/>Get noticed in a crowded digital world."
            ]}
            quote="🚀 Fast-track your startup's success with our specialized offerings."
            link="/Services"
            img={StartUp}
            alt="Providing Solutions for Startups looking to announce and expand their digital footprint."
          />
          <ServiceCard
            title="Individuals"
            subtitle="Empowering Individual Creators and Freelancers"
            listItems={[
              "<strong>Web Development</strong>: <br/>Personal portfolios and blogs.",
              "<br/><strong>Mobile App Development</strong>:<br/>Apps for freelancers and creators.",
              "<br/><strong>SEO Presence</strong>: <br/>Personal brand optimization.",
              "<br/><strong>Maintenance and Support</strong>: <br/>Maintain Smooth Digital Operations."
            ]}
            quote="🎨 Turn your passion into a profession with our personalized services."
            link="/Services"
            img={Individual}
            alt="Bringing your content to the next level and a bigger audience."
          />
        </div>
      </div>
    );
};

export default ServiceComponent;
