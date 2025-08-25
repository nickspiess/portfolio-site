import React from 'react'
import Image from 'next/image'
import styles from './styles/Author.module.css';

export const Author = ({ author }) => {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <img
                    src={author.photo.url}
                    alt={author.name}
                    className={styles.image}
                />
            </div>
            <div className={styles.content}>
                <h3 className={styles.name}>{author.name}</h3>
                <p className={styles.bio}>{author.bio}</p>
            </div>
        </div>
    )
}

export default Author;