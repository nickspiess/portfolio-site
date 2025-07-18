import Link from 'next/link';
import Image from 'next/image';

import React, { useState, useEffect } from 'react'
import { getCategories } from '../../services'

import styles from '../styles/Blog.module.css'

import OrdoAbChao from '../../public/images/OrdoAbChao.png'


const BlogHeaderPost = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategories()
        .then((newCategories) => setCategories(newCategories))
    }, [])


  return (

    <nav className={styles.navbar}>
        <Image src={OrdoAbChao} className={styles.logo}/>
            <ul className={styles.navLinks}>
                {categories.map((category, index) => (
                    <li key={index}>
                        <Link href={`/category/${category.slug}`} passHref>
                            <p className={styles.navLinkPost}>{category.name}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
  )
}

export default BlogHeaderPost;