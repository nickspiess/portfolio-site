import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { getCategories } from '../services'
import styles from './styles/PostWidget.module.css';

const Categories = () => {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories()
      .then((newCategories) => setCategories(newCategories))
  }, [])

  return (
    <div>
        <div className={styles.categoryCat}>
            <h3 className={`${styles.categoryHeader}`}>
              Categories
            </h3>
          <div className={styles.categoryContainer}>
          {categories.map((category) => (
            <Link key={category.slug} href={`/category/${category.slug}`}>
              <span className={styles.categoryLink}>
                  {category.name}
              </span>
            </Link>
        ))}
        </div>
        </div>
    </div>
  )
}

export default Categories