

import Link from 'next/link';
import Image from 'next/image';
import Navbar from './Navbar'
import ContactForm from './ContactForm';
import Footer from './Footer'
import styles from '../styles/ContactPage.module.css';
import { useRouter } from "next/router";
import { useEffect, useState, useRef } from 'react';
import React from 'react';



const Contact = () => {

    return (
        <>
            <div className={styles.background}>
            <Navbar />
            <div className={styles.contactFormContainer}>
                <ContactForm />
            </div>
            <Footer />
            </div>
        
        </>
        );
    };
    
export default Contact;