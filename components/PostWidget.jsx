import React, { useState, useEffect } from 'react'
import moment from 'moment';
import Link from 'next/link';
import styles from './styles/PostWidget.module.css';
import { getRecentPosts, getSimilarPosts } from '../services';
import { PostWidgetSkeleton } from './SkeletonLoader';

const PostWidget = ({ categories, slug }) => {
    const [relatedPosts, setRelatedPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        setIsLoading(true);
        if (slug) {
            getSimilarPosts(categories, slug)
                .then((result) => {
                    setRelatedPosts(result);
                    setIsLoading(false);
                })
        } else {
            getRecentPosts()
                .then((result) => {
                    setRelatedPosts(result);
                    setIsLoading(false);
                })
        }
    }, [slug])
    
    if (isLoading) {
        return <PostWidgetSkeleton />;
    }

    return (
        <div className={styles.widget}>
            <h3 className={styles.title}>
                {slug ? 'Related Posts' : 'Recent Posts'}
            </h3>
            <div className={styles.postsList}>
                {relatedPosts.map((post) => (
                    <article key={post.slug} className={styles.postItem}>
                        <div className={styles.imageContainer}>
                            <img
                                alt={post.title}
                                className={styles.image}
                                src={post.featuredImage.url}
                            />
                        </div>
                        <div className={styles.content}>
                            <Link href={`/post/${post.slug}`} className={styles.postLink}>
                                <h4 className={styles.postTitle}>{post.title}</h4>
                            </Link>
                            <time className={styles.date} dateTime={post.createdAt}>
                                {moment(post.createdAt).format('MMM DD, YYYY')}
                            </time>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    )
}

export default PostWidget