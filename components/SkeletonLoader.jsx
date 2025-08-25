import React from 'react';
import styles from './styles/SkeletonLoader.module.css';

const SkeletonLoader = () => {
  return (
    <div className={styles.skeleton}>
      <div className={styles.skeletonShimmer}></div>
    </div>
  );
};

export const PostCardSkeleton = () => {
  return (
    <article className={styles.postContainer}>
      <div className={styles.imageContainer}>
        <SkeletonLoader />
      </div>
      <div className={styles.content}>
        <div className={styles.meta}>
          <div className={styles.author}>
            <div className={styles.authorPhotoSkeleton}>
              <SkeletonLoader />
            </div>
            <div className={styles.authorNameSkeleton}>
              <SkeletonLoader />
            </div>
          </div>
          <div className={styles.dateSkeleton}>
            <SkeletonLoader />
          </div>
        </div>
        <div className={styles.titleSkeleton}>
          <SkeletonLoader />
        </div>
        <div className={styles.excerptSkeleton}>
          <SkeletonLoader />
          <SkeletonLoader />
          <SkeletonLoader />
        </div>
        <div className={styles.buttonSkeleton}>
          <SkeletonLoader />
        </div>
      </div>
    </article>
  );
};

export const PostWidgetSkeleton = () => {
  return (
    <div className={styles.widget}>
      <div className={styles.widgetTitle}>
        <SkeletonLoader />
      </div>
      <div className={styles.postsList}>
        {[...Array(3)].map((_, index) => (
          <div key={index} className={styles.postItem}>
            <div className={styles.smallImageContainer}>
              <SkeletonLoader />
            </div>
            <div className={styles.smallContent}>
              <div className={styles.smallTitleSkeleton}>
                <SkeletonLoader />
              </div>
              <div className={styles.smallDateSkeleton}>
                <SkeletonLoader />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const CategoriesSkeleton = () => {
  return (
    <div className={styles.widget}>
      <div className={styles.widgetTitle}>
        <SkeletonLoader />
      </div>
      <div className={styles.categoryList}>
        {[...Array(4)].map((_, index) => (
          <div key={index} className={styles.categoryItem}>
            <SkeletonLoader />
          </div>
        ))}
      </div>
    </div>
  );
};

export const FeaturedPostSkeleton = () => {
  return (
    <div className={styles.featuredContainer}>
      <div className={styles.featuredImageContainer}>
        <SkeletonLoader />
      </div>
      <div className={styles.featuredContent}>
        <div className={styles.featuredTitleSkeleton}>
          <SkeletonLoader />
        </div>
        <div className={styles.featuredExcerptSkeleton}>
          <SkeletonLoader />
          <SkeletonLoader />
        </div>
      </div>
    </div>
  );
};

export default SkeletonLoader;