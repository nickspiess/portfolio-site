import styles from '../styles/AboutPage.module.css';
import AboutMe from './AboutMe';
import PhotoGallery from './PhotoGallery';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Navbar from './Navbar';
import Footer from './Footer';
//import Stars from '../../public/images/Stars.mov';

const About = () => {

    const [positions, setPositions] = useState([
        { x: 0, y: 0 },
        { x: 40, y: 60 },
      ]);
    
      useEffect(() => {
        const contentElement = document.querySelector(`.${styles.content}`);
        let time = 0; // Time variable to keep track of sine/cosine values
      
        function randomizePosition() {
          time += 0.01; // Slower increment to time
      
          const newPositions = positions.map((pos, index) => {
            const speedFactor = 0.1; // Lower value for slower speed
            const distanceFactor = 1; // Controls the distance of the floating
      
            // Using sine and cosine for smooth floating
            const x = pos.x + distanceFactor * Math.sin(speedFactor * time + index);
            const y = pos.y + distanceFactor * Math.cos(speedFactor * time + index);
      
            return { x, y };
          });
      
          setPositions(newPositions);
      
          const positionString = newPositions
            .map(pos => `${pos.x}px ${pos.y}px`)
            .join(", ");
      
          contentElement.style.backgroundPosition = positionString;
        }
      
        // Initialize with random positions
        randomizePosition();
      
        // Update every 32ms for slower motion
        const intervalId = setInterval(randomizePosition, 200);
      
        return () => clearInterval(intervalId);
      }, [positions]);
      
      
    
    

    return (
        <>
                <div className={styles.content}> {/* Add this line */}
                
            <div className={styles.overlayWrapper}>
                <Navbar />
            </div>
            <div className={styles.aboutContainer}>
                <AboutMe />
            </div>
            <div className={styles.galleryContainer}>
                <PhotoGallery />
            </div>
            <div className={styles.overlayWrapper}>
                <Footer />
            </div>
            </div>
        </>
      );
};

export default About;