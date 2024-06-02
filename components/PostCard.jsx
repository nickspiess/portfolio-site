import React from 'react';
import moment from 'moment';
import Link from 'next/link';
import styles from './styles/PostCard.module.css';

const PostCard = ({ post }) => {
  return (
    <div className={`${styles.postContainer} bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8`}>
      <div className={`${styles.imgDiv} relative overflow-hidden shadow-md pb-80 mb-6`}>
        <img 
          src={post.featuredImage.url}
          alt={post.title}
          className={`${styles.image} object-top absolute h-80 w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg`}
        />
      </div>
      <h1 className={`transition duration-700 text-center mb-8 cursor-pointer hover:text-pink-600 text-3xl font-semibold ${styles.postTitle}`}>
        <Link href={`/post/${post.slug}`}>
          {post.title}
        </Link>
      </h1>
      <div className={`${styles.summary}`}>
        <div className={`${styles.author}`}>
          <img 
            alt={post.author.name}
            height="30x"
            width="30px"
            className={`${styles.authorPhoto}`}
            src={post.author.photo.url}
          />
          <p className={`${styles.authorInfo}`}>
            {post.author.name}
          </p>
        </div>
        <div className={`${styles.info}`}>
          <span className={`${styles.createdAt}`}>
            {moment(post.createdAt).format('MMM DD, YYYY')}
          </span>
        </div>
      </div>
      <p className={`${styles.excerpt}`}>
        {post.excerpt}
      </p>
      <div className={`${styles.link}`}>
        <Link href={`/post/${post.slug}`}>
          <button className={`${styles.continueReadingButton}`}>
            Continue Reading
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
