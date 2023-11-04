import React, { useState } from 'react';
import styles from '../styles/ExperienceTile.module.css';
import Image from 'next/image';
import Link from 'next/link'

const ExperienceTile = ({ title, summary, image, link }) => {
  const [isRotated, setIsRotated] = useState(false); // State for rotation

  const handleTileClick = () => {
    console.log(link)
    setIsRotated(!isRotated);
  };
  const handleButtonClick = () => {
    if (link) {
      window.open(link.startsWith('http') ? link : `//${link}`, '_blank', 'noopener noreferrer');

    }
  };

  return (
    <>
      <div className={styles.mainContainer}>
  <div className={styles.title}>
    <h2 className={styles.titleHeader}>{title}</h2>
  </div>
  <div className={styles.container}>
    <div
      className={`${styles.experienceTile} ${isRotated ? styles.hovered : ''}`}
      onClick={handleTileClick}
    >
      {/* Assuming ServiceCard has a more modern and sleek image presentation */}
      <div className={`${styles.imageDiv} ${isRotated ? styles.hide : styles.show}`}>
        <Image
          className={styles.image}
          src={image}
          alt={title}
          layout="responsive" // Assume the ServiceCard uses responsive images
          width={800}
          height={300}
        />
      </div>
      <div className={`${styles.projectInfo} ${isRotated ? styles.show : ''}`}>
        <p className={styles.summary}>{summary}</p>
        {/* Assuming ServiceCard uses a more subtle button style */}
        <button className={styles.projectButton} onClick={handleButtonClick}>View Project</button>
      </div>
    </div>
  </div>
</div>
    </>
  );
};

export default ExperienceTile;
