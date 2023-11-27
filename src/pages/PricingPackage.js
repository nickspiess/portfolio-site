import React from 'react';
import styles from '../styles/PricingPackage.module.css';
import { useRouter } from 'next/router';

const PricingPackage = () => {

  const router = useRouter();

  const handleButtonClick = () => {
    // Use the router.push method inside the handler
    router.push('/Contact');
  };

  return (
    <div className={styles.packagePricingContainer}>

      <div className={`${styles.packageCard} ${styles.basic}`}>
        <h3 className={styles.priceTitle}>Basic Package</h3>
        <ul className={styles.list}>
          <li className={styles.listItem}>Static Website up to 5 Pages</li>
          <li className={styles.listItem}>Basic SEO</li>
          <li className={styles.listItem}>Email Support</li>
        </ul>
        <div className={styles.divider}></div>  {/* Small line added here */}
        <p className={styles.price}>$2500</p>  {/* Moved below <ul> and divider */}
        <button className={styles.button} onClick={handleButtonClick}>Contact Us</button>
      </div>

      <div className={`${styles.packageCard} ${styles.standard}`}>
        <h3 className={styles.priceTitle}>Standard Package</h3>
        <ul className={styles.list}>
          <li className={styles.listItem}>Dynamic Website Up to 7 Pages</li>
          <li className={styles.listItem}>Advanced SEO</li>
          <li className={styles.listItem}>Maintenance Packages</li>
        </ul>
        <div className={styles.divider}></div>  {/* Small line added here */}
        <p className={styles.price}>$5000</p>  {/* Moved below <ul> and divider */}
        <button className={styles.button} onClick={handleButtonClick}>Contact Us</button>
      </div>

      <div className={`${styles.packageCard} ${styles.premium}`}>
        <h3 className={styles.priceTitle}>Premium Package</h3>
        <ul className={styles.list}>
          <li className={styles.listItem}>E-commerce Features</li>
          <li className={styles.listItem}>Content Strategy</li>
          <li className={styles.listItem}>Priority Support</li>
        </ul>
        <div className={styles.divider}></div>  {/* Small line added here */}
        <p className={styles.price}>$7000+</p>  {/* Moved below <ul> and divider */}
        <button className={styles.button} onClick={handleButtonClick}>Contact Us</button>
      </div>

      {/* Custom Package Information */}
      <div className={styles.customPackageInfo}>
        <p className={styles.customPricing}>We also offer custom packages and pricing to suit your specific needs. Please contact us for more information.</p>
      </div>
    </div>
  );
};

export default PricingPackage;
