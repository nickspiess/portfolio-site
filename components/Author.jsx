import React from 'react'
import styles from './styles/Author.module.css';
import Image from 'next/image'

export const Author = ({ author }) => {
  return (
    <div className={styles.imgContainer}>
        <Image
          unoptimized
          alt={author.name}
          height={100}
          width={100}
          className={styles.img}
          src={author.photo.url}
          />
        <h3 className={styles.header}>
          {author.name}
        </h3>
        <p className={styles.bio}>{author.bio}</p>
    </div>
  )
}

export default Author;
