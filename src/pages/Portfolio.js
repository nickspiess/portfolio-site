import Link from 'next/link';
import Image from 'next/image';
import Navbar from './Navbar'
import Works from './Works';
import Experience from './Experience';
import Footer from './Footer'
import styles from '../styles/Portfolio.module.css';
import { useRouter } from "next/router";
import { useEffect, useState, useRef } from 'react';
import React from 'react';



const Portfolio = () => {

    return (
        <>
            <div className={styles.background}>
            <Navbar />
                <Works />
                <Experience />
            <Footer />
            </div>
        
        </>
        );
    };
    
export default Portfolio;
    