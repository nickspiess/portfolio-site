import React, { useState } from 'react';
import styles from '../styles/ExperienceTile.module.css';
import Image from 'next/image';
import Link from 'next/link'

const ExperienceTile = ({ title, summary, image, link }) => {
  const [isActive, setIsActive] = useState(false);

  const handleButtonClick = (e) => {
    e.stopPropagation();
    if (link) {
      window.open(link.startsWith('http') ? link : `//${link}`, '_blank', 'noopener noreferrer');
    }
  };

  const handleTileClick = (e) => {
    // If clicking the button, don't toggle
    if (e.target.closest(`.${styles.projectButton}`)) {
      return;
    }
    // Toggle active state
    setIsActive(!isActive);
  };

  const handleTileTouch = (e) => {
    // If touching the button, don't toggle
    if (e.target.closest(`.${styles.projectButton}`)) {
      return;
    }
    // Toggle active state
    setIsActive(!isActive);
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <div 
          className={`${styles.experienceTile} ${title === 'Preece Financial Planning' ? styles.preeceCard : ''} ${isActive ? styles.active : ''}`}
          onClick={handleTileClick}
          onTouchStart={handleTileTouch}
        >
          <div className={styles.title}>
            <h2 className={styles.titleHeader}>{title}</h2>
          </div>
          <div className={styles.imageDiv}>
            <Image
              className={styles.image}
              src={image}
              alt={title}
              layout="responsive"
              width={800}
              height={300}
            />
          </div>
          <div className={styles.projectInfo}>
            <p className={styles.summary}>{summary}</p>
            <button className={styles.projectButton} onClick={handleButtonClick}>
              View Project
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceTile;
