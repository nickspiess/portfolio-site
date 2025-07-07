import { useState, useEffect } from 'react';
import styles from '../styles/PhotoGallery.module.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const PhotoGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedGallery, setSelectedGallery] = useState('adventures');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const galleries = {
    running: ['/images/running/Bell.JPG', '/images/running/AppletonFinish.jpeg', '/images/running/Smilin.jpeg'],
    adventures: ['/images/adventures/NearSneffels.jpeg', '/images/adventures/MountainGarden.jpeg', '/images/adventures/BlueMesa.jpeg', '/images/adventures/Elbert.jpg', '/images/adventures/SneffelsLakes.jpeg'],
    jiuJitsu: ['/images/jiu-jitsu/Cheesin.jpg', '/images/jiu-jitsu/DoubleLeg.jpeg', '/images/jiu-jitsu/Gold.jpeg', '/images/jiu-jitsu/HalfGuard.jpg', '/images/jiu-jitsu/WiscoGold.jpeg'],
  };

  const changeImage = (direction) => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    const newIndex = direction === 'next' 
      ? (currentIndex + 1) % galleries[selectedGallery].length
      : (currentIndex - 1 + galleries[selectedGallery].length) % galleries[selectedGallery].length;
    
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setIsTransitioning(false);
    }, 300);
  };

  const changeGallery = (gallery) => {
    setIsTransitioning(true);
    setSelectedGallery(gallery);
    setCurrentIndex(0);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  // Auto-advance timer
  useEffect(() => {
    const timer = setInterval(() => {
      if (!isTransitioning) {
        changeImage('next');
      }
    }, 6000); // Changes image every 6 seconds

    return () => clearInterval(timer);
  }, [currentIndex, selectedGallery, isTransitioning]);

  return (
    <div className={styles.galleryContainer}>
      <div className={styles.galleryCard}>
        <h1 className={styles.galleryTitle}>A Little Glimpse Into My Life</h1>
        
        <div className={styles.imageContainer}>
          <button 
            className={styles.navButton} 
            onClick={() => changeImage('prev')}
            aria-label="Previous image"
          >
            <ChevronLeft size={24} />
          </button>
          
          <div className={styles.imageWrapper}>
            <img 
              className={`${styles.image} ${isTransitioning ? styles.fadeOut : styles.fadeIn}`}
              src={galleries[selectedGallery][currentIndex]} 
              alt={`Gallery image ${currentIndex + 1}`}
            />
          </div>

          <button 
            className={`${styles.navButton} ${styles.nextButton}`}
            onClick={() => changeImage('next')}
            aria-label="Next image"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <div className={styles.categoryButtons}>
          {Object.keys(galleries).map((gallery) => (
            <button
              key={gallery}
              className={`${styles.categoryButton} ${selectedGallery === gallery ? styles.active : ''}`}
              onClick={() => changeGallery(gallery)}
            >
              {gallery.charAt(0).toUpperCase() + gallery.slice(1)}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;