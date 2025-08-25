import React from 'react';
import moment from 'moment';
import Image from 'next/image';
import Link from 'next/link';
import styles from './styles/FeaturedPostCard.module.css'

export const FeaturedPostCard = ({ post }) => {
    return (
        <article className={styles.card}>
            <Link href={`/post/${post.slug}`} className={styles.link}>
                <div className={styles.imageContainer}>
                    <img
                        src={post.featuredImage.url}
                        alt={post.title}
                        className={styles.image}
                    />
                    <div className={styles.overlay}>
                        <div className={styles.content}>
                            <time className={styles.date} dateTime={post.createdAt}>
                                {moment(post.createdAt).format('MMMM DD, YYYY')}
                            </time>
                            <h3 className={styles.title}>{post.title}</h3>
                            <div className={styles.author}>
                                <img
                                    src={post.author.photo.url}
                                    alt={post.author.name}
                                    className={styles.authorImage}
                                />
                                <span className={styles.authorName}>{post.author.name}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </article>
    );
}

export default FeaturedPostCard;