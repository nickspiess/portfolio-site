import React, { useEffect } from 'react';
import styles from '../styles/ServiceCard.module.css';
import Image from 'next/image';
// ... import other images

    const services = [
        {
          title: 'Web Design/Development',
          image: '/images/WebDevelopment.jpeg',
          description: 'Transform your online presence with our cutting-edge web design and development solutions. From sleek, user-friendly interfaces to robust, scalable architectures, we bring your vision to life.'
        },
        {
          title: 'Mobile Apps',
          image: '/images/MobileApp.jpeg',
          description: 'Reach your customers on the go with our tailor-made mobile apps. Whether it\'s Android or iOS, our apps deliver unparalleled user experience and performance.'
        },
        {
          title: 'Cloud Services',
          image: '/images/CloudServices.jpeg',
          description: 'Streamline your operations and enhance collaboration with our secure, scalable cloud solutions. Customizable to suit your specific needs, our cloud services offer reliability and flexibility.'
        },
        {
          title: 'SEO',
          image: '/images/SEO.jpeg',
          description: 'Get found online and increase your reach. Our SEO experts employ proven strategies to improve your site\'s ranking, drive organic traffic, and boost engagement.'
        },
        {
          title: 'E-Commerce',
          image: '/images/ECommerce.jpeg',
          description: 'Turn browsers into buyers with our comprehensive e-commerce solutions. From secure payment gateways to intuitive UI/UX, we help you run an online store that sells.'
        },
        {
          title: 'Maintenance Services', 
          image: '/images/Maintenance.jpeg',
          description: 'Keep your digital assets performing optimally with our 24/7 maintenance services. From regular updates to emergency fixes, we\'ve got you covered.'
        }
      ];

      const ServiceCards = () => {
        useEffect(() => {
          const observer = new IntersectionObserver(
            (entries) => {
              entries.forEach((entry) => {
                if (entry.isIntersecting) {
                  entry.target.classList.add(styles.floatIn);
                }
              });
            },
            {
              root: null,
              rootMargin: '0px',
              threshold: 0.1,
            }
          );
      
          const cards = document.querySelectorAll('.card');
      
          cards.forEach((card) => observer.observe(card));
      
          return () => {
            cards.forEach((card) => observer.unobserve(card));
          };
        }, []);
      
        return (
          <div className={styles.cardContainer}>
            {services.map((service, index) => (
                      <div 
                      className={`${styles.floating} ${styles.card}`} 
                      key={index}
                      style={{ animationDuration: `${Math.random() * 5 + 3}s` }} // Random duration between 1 and 6 seconds
                    >
                <div className={styles.cardInner}>
                  <div className={styles.cardFront}>
                    <Image className={styles.image} src={service.image} alt={service.title} width={300} height={200} />
                    <h3 className={styles.title}>{service.title}</h3>
                  </div>
                  <div className={styles.cardBack}>
                    <p>{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );
      };

      
export default ServiceCards;
