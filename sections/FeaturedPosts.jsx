import React, { useState, useEffect, useRef } from 'react';
import { FeaturedPostCard } from '../components';
import { getFeaturedPosts } from '../services';

import styles from '../components/styles/FeaturedPostCard.module.css';

const FeaturedPosts = () => {
  const [featuredPosts, setFeaturedPosts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    getFeaturedPosts().then(posts => {
      setFeaturedPosts(posts);
    });
  }, []);

  useEffect(() => {
    const updateIndex = () => {
      setCurrentIndex(prev => (prev + 1) % featuredPosts.length);
    };

    intervalRef.current = setInterval(updateIndex, 7000);  // Rotate image every 7 seconds

    return () => clearInterval(intervalRef.current);
  }, [featuredPosts.length]);

  return (
    <div className={styles.imgContainer}>
      {featuredPosts.map((post, index) => (
        <div
          className={styles.imageSlide}
          key={index}
          style={{
            opacity: index === currentIndex ? 1 : 0,
            transition: 'opacity 1s ease',
            position: 'absolute',
            width: '100%',
            height: '100%'
          }}
        >
          <FeaturedPostCard post={post} />
        </div>
      ))}
    </div>
  );
};

export default FeaturedPosts;
