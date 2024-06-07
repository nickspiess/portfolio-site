import React, { useState, useEffect } from 'react'
import moment from 'moment';
import Link from 'next/link';
import styles from './styles/PostWidget.module.css';

import { getRecentPosts, getSimilarPosts } from '../services'
 

const PostWidget = ({ categories, slug }) => {

  const [relatedPosts, setRelatedPosts] = useState([]);
  
  useEffect(() => {
      if (slug) {
        getSimilarPosts(categories, slug)
          .then(( result ) => setRelatedPosts(result))
      } else {
        getRecentPosts()
          .then(( result ) => setRelatedPosts(result))
      }
  }, [slug])


  return (
    <div className={`${styles.widgetContainer}`}>
        <h3 className={`${styles.postsHeader}`}>
          {slug ? 'Related Posts' : 'Recent Posts'}
        </h3>
        <div className={styles.postContainer}>
        {relatedPosts.map((post) => (
          <div key={post.title} className={`${styles.postTitle}`}>
            <div className={`${styles.imgContainer}`}>
              <img
                  alt={post.title}
                  height="60px"
                  width="100px"
                  className={`${styles.img}`}
                  src={post.featuredImage.url}
              />
              <p className={`${styles.date}`}>
                {moment(post.createdAt).format('MMM DD, YYYY')}
              </p>
            </div>
            <div className={`${styles.emptyContainer}`}>
              </div>
            <div className={`${styles.dateContainer}`}>
              <Link href={`/post/${post.slug}`} className={`${styles.link}`} key={post.title} >
                {post.title}
              </Link>
            </div>
          </div>
        ))}
        </div>
    </div>
  )
}


export default PostWidget
