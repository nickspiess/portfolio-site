import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { getCategories } from '../services'
import styles from './styles/Categories.module.css';
import { CategoriesSkeleton } from './SkeletonLoader';

const Categories = () => {
    const [categories, setCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getCategories()
            .then((newCategories) => {
                setCategories(newCategories);
                setIsLoading(false);
            })
    }, [])
    
    if (isLoading) {
        return <CategoriesSkeleton />;
    }

    return (
        <div className={styles.widget}>
            <h3 className={styles.title}>Categories</h3>
            <div className={styles.categoryList}>
                {categories.map((category) => (
                    <Link 
                        key={category.slug} 
                        href={`/category/${category.slug}`}
                        className={styles.categoryItem}
                    >
                        <span className={styles.categoryName}>
                            {category.name}
                        </span>
                        <span className={styles.categoryIcon}>→</span>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Categories