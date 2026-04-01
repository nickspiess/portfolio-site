import React, { useState, useRef, useEffect, useCallback } from 'react';
import styles from '../styles/Experience.module.css';
import Image from 'next/image'
import Javascript from '../../public/images/js.png'
import HTML from '../../public/images/html.png'
import CSS from '../../public/images/css.png'
import ReactIcon from '../../public/images/react.png'
import Python from '../../public/images/python.png'
import MySQL from '../../public/images/mysql.png'
import Java from '../../public/images/java.png'
import Git from '../../public/images/git.png'
import AWS from '../../public/images/aws.png'
import NodeJS from '../../public/images/nodejs.png'
import HyperLedger from '../../public/images/hyperledger.png'
import Agile from '../../public/images/agile.png'
import NextJS from '../../public/images/NextJS.png'
import MongoDB from '../../public/images/mongoDB.png'
import Supabase from '../../public/images/supabase.png'
import CareerExperiences from './CareerExperiences';

const tooltipData = {
  JavaScript: 'Core language across every project — from client sites to internal tools at Spectrum.',
  Python: 'Built end-to-end automation systems at SlingTV using Behave for regression testing at scale.',
  MySQL: 'Relational data modeling and query optimization for structured application data.',
  React: 'Primary frontend framework — used at Spectrum, Spiess Technologies, and across client builds.',
  'Node.js': 'Server-side runtime powering APIs and full-stack applications behind my Next.js projects.',
  Hyperledger: 'Enterprise blockchain framework — built permissioned ledger applications with IBM Fabric.',
  HTML: 'Semantic, accessible markup as the foundation for every site I hand-code.',
  NextJS: 'Go-to full-stack framework — powers Praxis Running, client sites, and this portfolio.',
  MongoDB: 'NoSQL document storage for flexible, schema-light application backends.',
  CSS: 'Custom styling from scratch — glass-morphism, responsive layouts, and polished animations.',
  Git: 'Daily driver for version control, branching strategies, and team collaboration.',
  Java: 'Object-oriented fundamentals — algorithms, data structures, and backend application logic.',
  Supabase: 'Auth, real-time data, and storage backend for Praxis Running\'s training platform.',
  AWS: 'Cloud deployment and infrastructure — S3, EC2, and serverless services.',
  Agile: 'Sprint planning, standups, and iterative delivery across every professional role.',
};

const SkillItem = ({ src, width, alt, label, floatClass, tooltip }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const handleOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) close();
    };
    document.addEventListener('touchstart', handleOutside);
    document.addEventListener('mousedown', handleOutside);
    return () => {
      document.removeEventListener('touchstart', handleOutside);
      document.removeEventListener('mousedown', handleOutside);
    };
  }, [open, close]);

  return (
    <li
      ref={ref}
      className={`${floatClass} ${styles.skillImage} ${styles.tooltipWrap}`}
      onClick={() => setOpen((v) => !v)}
    >
      <Image className={styles.image} src={src} width={width} alt={alt} />
      {label}
      <span className={`${styles.tooltip} ${open ? styles.tooltipOpen : ''}`}>
        {tooltip}
      </span>
    </li>
  );
};

const Experience = () => {
  return (
      <>
      <section id='experience' className={styles.sectionContainer}>
      <header className={styles.header}>
          <h2 className={styles.head}>Career Experiences</h2>
      </header>
    <div className={styles.resumeContainer}>
    <div className={styles.section}>
            <CareerExperiences />
        </div>
      <div className={styles.skillSection}>
        <h2 className={`${styles.sectionTitle}`}> and Technologies</h2>
        <div className={styles.listContainer}>
            <ul className={styles.list}>
                <SkillItem floatClass={styles.floating4} src={Javascript} width={80} alt='JavaScript' label='JavaScript' tooltip={tooltipData['JavaScript']} />
                <SkillItem floatClass={styles.floating1} src={Python} width={80} alt='Python' label='Python' tooltip={tooltipData['Python']} />
                <SkillItem floatClass={styles.floating2} src={MySQL} width={80} alt='MySQL' label='MySQL' tooltip={tooltipData['MySQL']} />
            </ul>
            <ul className={styles.list}>
                <SkillItem floatClass={styles.floating4} src={ReactIcon} width={80} alt='Reactjs' label='React' tooltip={tooltipData['React']} />
                <SkillItem floatClass={styles.floating1} src={NodeJS} width={80} alt='Node.js' label='Node.js' tooltip={tooltipData['Node.js']} />
                <SkillItem floatClass={styles.floating} src={HyperLedger} width={80} alt='IBM Hyperledger' label='Hyperledger' tooltip={tooltipData['Hyperledger']} />
            </ul>
            <ul className={styles.list}>
                <SkillItem floatClass={styles.floating1} src={HTML} width={80} alt='HTML' label='HTML' tooltip={tooltipData['HTML']} />
                <SkillItem floatClass={styles.floating2} src={NextJS} width={80} alt='Nextjs' label='NextJS' tooltip={tooltipData['NextJS']} />
                <SkillItem floatClass={styles.floating2} src={MongoDB} width={80} alt='MongoDB' label='MongoDB' tooltip={tooltipData['MongoDB']} />
            </ul>
            <ul className={styles.list}>
                <SkillItem floatClass={styles.floating4} src={CSS} width={100} alt='CSS' label='CSS' tooltip={tooltipData['CSS']} />
                <SkillItem floatClass={styles.floating} src={Git} width={80} alt='Git/Version Control' label='Git' tooltip={tooltipData['Git']} />
                <SkillItem floatClass={styles.floating3} src={Java} width={80} alt='Java' label='Java' tooltip={tooltipData['Java']} />
            </ul>
            <ul className={styles.list}>
                <SkillItem floatClass={styles.floating1} src={Supabase} width={80} alt='Supabase' label='Supabase' tooltip={tooltipData['Supabase']} />
                <SkillItem floatClass={styles.floating3} src={AWS} width={80} alt='Amazon Web Services' label='AWS' tooltip={tooltipData['AWS']} />
                <SkillItem floatClass={styles.floating2} src={Agile} width={80} alt='Agile Methdologies' label='Agile' tooltip={tooltipData['Agile']} />
            </ul>
        </div>
      </div>
      </div>
      </section>
    </>
  );
};

export default Experience;
