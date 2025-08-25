import React, { useState, useEffect } from 'react';
import { FeaturedPostCard } from '../components';
import { getFeaturedPosts } from '../services';
import { FeaturedPostSkeleton } from '../components/SkeletonLoader';
import styles from './FeaturedPosts.module.css';

const FeaturedPosts = () => {
    const [featuredPosts, setFeaturedPosts] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getFeaturedPosts().then(posts => {
            setFeaturedPosts(posts);
            setIsLoading(false);
        });
    }, []);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % featuredPosts.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => 
            prev === 0 ? featuredPosts.length - 1 : prev - 1
        );
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    if (isLoading) {
        return <FeaturedPostSkeleton />;
    }

    if (featuredPosts.length === 0) {
        return null;
    }

    return (
        <div className={styles.container}>
            <div className={styles.carousel}>
                <div className={styles.carouselInner}>
                    {featuredPosts.map((post, index) => (
                        <div
                            key={post.id}
                            className={`${styles.slide} ${
                                index === currentIndex ? styles.active : ''
                            }`}
                        >
                            <FeaturedPostCard post={post} />
                        </div>
                    ))}
                </div>
                
                {featuredPosts.length > 1 && (
                    <>
                        <button 
                            className={`${styles.control} ${styles.prev}`}
                            onClick={prevSlide}
                            aria-label="Previous post"
                        >
                            ‹
                        </button>
                        <button 
                            className={`${styles.control} ${styles.next}`}
                            onClick={nextSlide}
                            aria-label="Next post"
                        >
                            ›
                        </button>
                        
                        <div className={styles.dots}>
                            {featuredPosts.map((_, index) => (
                                <button
                                    key={index}
                                    className={`${styles.dot} ${
                                        index === currentIndex ? styles.activeDot : ''
                                    }`}
                                    onClick={() => goToSlide(index)}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default FeaturedPosts;