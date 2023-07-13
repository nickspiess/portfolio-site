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
      console.log('LINK : ' + link)
      document.location.href = link;
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
            <div className={`${styles.imageDiv} ${isRotated ? styles.hide : styles.show}`}>
              <Image
                className={styles.image}
                src={image}
                alt={title}
                width={400}
                height={300}
              />
            </div>
            <div className={`${styles.projectInfo} ${isRotated ? styles.show : ''}`}>
              <p className={styles.summary}>{summary}</p>
                <a target="_blank" href={link} rel="noopener noreferrer">
                  <button className={styles.projectButton}>View Project</button>
                </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExperienceTile;
