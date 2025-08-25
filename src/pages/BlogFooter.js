import Link from 'next/link';
import Image from 'next/image';
import React, { useState, useEffect } from 'react'
import { getCategories } from '../../services'
import styles from '../styles/BlogFooter.module.css'
import OrdoAbChao from '../../public/images/OrdoAbChao.png'

const BlogFooter = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategories()
        .then((newCategories) => setCategories(newCategories))
    }, [])

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.logoSection}>
                    <Link href="/ordoabchao" className={styles.logoLink}>
                        <Image 
                            src={OrdoAbChao} 
                            className={styles.logo} 
                            alt="Ordo Ab Chao" 
                        />
                    </Link>
                    <p className={styles.tagline}>Order from Chaos</p>
                </div>
                
                <nav className={styles.nav}>
                    <h4 className={styles.navTitle}>Categories</h4>
                    <ul className={styles.navList}>
                        {categories.map((category) => (
                            <li key={category.slug}>
                                <Link 
                                    href={`/category/${category.slug}`} 
                                    className={styles.navLink}
                                >
                                    {category.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className={styles.copyright}>
                    <p>&copy; 2024 Ordo Ab Chao. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default BlogFooter;