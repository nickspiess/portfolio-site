import React from 'react';
import moment from 'moment';
import Link from 'next/link';
import styles from './styles/PostCard.module.css';

const PostCard = ({ post }) => {
  return (
    <article className={styles.postContainer}>
      <Link href={`/post/${post.slug}`} className={styles.imageLink}>
        <div className={styles.imgDiv}>
          <img 
            src={post.featuredImage.url}
            alt={post.title}
            className={styles.image}
          />
        </div>
      </Link>

      <div className={styles.content}>
        <div className={styles.meta}>
          <div className={styles.author}>
            <img 
              alt={post.author.name}
              className={styles.authorPhoto}
              src={post.author.photo.url}
            />
            <span className={styles.authorInfo}>
              {post.author.name}
            </span>
          </div>
          <time className={styles.date} dateTime={post.createdAt}>
            {moment(post.createdAt).format('MMMM DD, YYYY')}
          </time>
        </div>

        <Link href={`/post/${post.slug}`} className={styles.titleLink}>
          <h2 className={styles.postTitle}>
            {post.title}
          </h2>
        </Link>

        <p className={styles.excerpt}>
          {post.excerpt}
        </p>

        <Link href={`/post/${post.slug}`} className={styles.buttonLink}>
          <button className={styles.continueReadingButton}>
            Continue Reading →
          </button>
        </Link>
      </div>
    </article>
  );
};

export default PostCard;