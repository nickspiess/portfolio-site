import Link from 'next/link';
import Image from 'next/image';

import React, { useState, useEffect } from 'react'
import { getCategories } from '../../services'

import styles from '../styles/Blog.module.css'

import OrdoAbChao from '../../public/images/OrdoAbChao.png'


const BlogHeader = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategories()
        .then((newCategories) => setCategories(newCategories))
    }, [])


  return (

    <nav className={styles.footer}>
        <Link href={`/ordoabchao`} passHref>
            <Image src={OrdoAbChao} className={styles.footerLogo} alt="Order out of Chaos"/>
        </Link>
            <ul className={styles.footerNavLinks}>
                {categories.map((category, index) => (
                    <li key={index}>
                        <Link href={`/category/${category.slug}`} passHref>
                            <p className={styles.footerNavLink}>{category.name}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
  )
}

export default BlogHeader;