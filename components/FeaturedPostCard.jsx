
import React from 'react';
import moment from 'moment';
import Image from 'next/image';
import Link from 'next/link';

import styles from './styles/FeaturedPostCard.module.css'


export const FeaturedPostCard = ({ post }) => {
    return (
      <div className={styles.featuredCard}>
      <div className={styles.imageContainer} style={{ backgroundImage: `url('${post.featuredImage.url}')` }}>
          <div className={styles.overlay}>
              <div className={styles.info}>
                  <p className={styles.date}>{moment(post.createdAt).format('MMM DD, YYYY')}</p>
                  <Link className={styles.title} href={`/post/${post.slug}`}>{post.title}</Link>
                  <div className={styles.authorInfo}>
                      <Image
                          unoptimized
                          alt={post.author.name}
                          height={30}
                          width={30}
                          className={styles.authorImage}
                          src={post.author.photo.url}
                      />
                      <p className={styles.authorName}>{post.author.name}</p>
                  </div>
              </div>
    </div>
    </div>
    </div>

  );
}

export default FeaturedPostCard;
