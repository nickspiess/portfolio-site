import { useState, useEffect, useRef } from 'react';
import styles from '../styles/PhotoGallery.module.css';

const PhotoGallery = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedGallery, setSelectedGallery] = useState('adventures');
    const [fadeClass, setFadeClass] = useState(styles['image-fade-in']);


  const galleries = {
    running: ['/images/running/Bell.JPG', '/image/running/Finish.jpeg', '/images/running/Smilin.jpeg'],
    adventures: ['/images/adventures/NearSneffels.jpeg', '/images/adventures/MountainGarden.jpeg', '/images/adventures/BlueMesa.jpeg', '/images/adventures/Elbert.jpg', '/images/adventures/SneffelsLakes.jpeg'],
    jiuJitsu: ['/images/jiu-jitsu/Cheesin.jpg', '/images/jiu-jitsu/DoubleLeg.jpeg', '/images/jiu-jitsu/Gold.jpeg', '/images/jiu-jitsu/HalfGuard.jpg', '/images/jiu-jitsu/WiscoGold.jpeg'],
  };

  useEffect(() => {
    // Fade in the image
    const fadeInTimer = setTimeout(() => {
      setFadeClass(styles['image-fade-in']);
    }, 0);
  
    // Keep the image visible for an additional 4 seconds
    const visibleTimer = setTimeout(() => {
      setFadeClass('');
    }, 8000);
  
    // Fade out (opacity goes back to 0 in the CSS)
    const fadeOutTimer = setTimeout(() => {
      setFadeClass(styles['image-fade-out']);
    }, 6000);
  
    // Switch the image after the fade-out is complete
    const cycleImageTimer = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % galleries[selectedGallery].length);
    }, 6000); // 8 seconds (you can adjust this)
  
    return () => {
      clearTimeout(fadeInTimer);
      clearTimeout(visibleTimer);
      clearTimeout(fadeOutTimer);
      clearTimeout(cycleImageTimer);
    };
  }, [currentIndex, selectedGallery]);
  

  return (
    <div className={styles.gallery}>
    <h1 className={styles.galleryTitle}>A Little Glimpse Into My Life..</h1>
    <div className={styles.imageContainer}>
      <img className={`${styles.image} ${fadeClass}`} src={galleries[selectedGallery][currentIndex]} alt="Gallery" />
      <button className={`${styles.prevButton} ${styles.navButton}`} onClick={() => setCurrentIndex((currentIndex - 1 + galleries[selectedGallery].length) % galleries[selectedGallery].length)}>Prev</button>
      <button className={`${styles.nextButton} ${styles.navButton}`} onClick={() => setCurrentIndex((currentIndex + 1) % galleries[selectedGallery].length)}>Next</button>
    </div>
    <div className={styles.buttonGroup}>
      <button onClick={() => setSelectedGallery('running')}>Running</button>
      <button onClick={() => setSelectedGallery('adventures')}>Adventures</button>
      <button onClick={() => setSelectedGallery('jiuJitsu')}>Jiu Jitsu</button>
    </div>
  </div>
  );
};

export default PhotoGallery;

