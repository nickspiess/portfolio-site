import Link from 'next/link';
import Image from 'next/image';
import React, { useState, useEffect } from 'react'
import { getCategories } from '../../services'
import styles from '../styles/BlogHeader.module.css'
import OrdoAbChao from '../../public/images/OrdoAbChao.png'

const BlogHeader = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategories()
        .then((newCategories) => setCategories(newCategories))
    }, [])

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.logoSection}>
                    <Link href="/ordoabchao" className={styles.logoLink}>
                        <Image 
                            src={OrdoAbChao} 
                            className={styles.logo} 
                            alt="Ordo Ab Chao" 
                            priority
                        />
                    </Link>
                </div>
                
                <nav className={styles.nav}>
                    <ul className={styles.navList}>
                        <li>
                            <Link href="/ordoabchao" className={styles.navLink}>
                                Home
                            </Link>
                        </li>
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
            </div>
        </header>
    )
}

export default BlogHeader;