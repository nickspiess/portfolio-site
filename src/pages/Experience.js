import React from 'react';
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
import MongoDB from '../../public/images/MongoDB.png'
import SCCM from '../../public/images/SCCM.png'
import CareerExperiences from './CareerExperiences';

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
        <h2 className={`${styles.floating} ${styles.sectionTitle}`}>Skills and Technologies</h2>
        <div className={styles.listContainer}>
            <ul className={styles.list}>
                <li className={`${styles.floating4} ${styles.skillImage}`}><Image className={styles.image} src={Javascript} width={80} alt='JavaScript' />JavaScript</li>
                <li className={`${styles.floating1} ${styles.skillImage}`}><Image className={styles.image} src={Python} width={80} alt='Python' />Python</li>
                <li className={`${styles.floating2} ${styles.skillImage}`}><Image className={styles.image} src={MySQL} width={80} alt='MySQL' />MySQL</li>
            </ul>
            <ul className={styles.list}>
                <li className={`${styles.floating4} ${styles.skillImage}`}><Image className={styles.image} src={ReactIcon} width={80} alt='Reactjs' />React</li>
                <li className={`${styles.floating3} ${styles.skillImage}`}><Image className={styles.image} src={AWS} width={80} alt='Amazon Web Services' />AWS</li>
                <li className={`${styles.floating} ${styles.skillImage}`}><Image className={styles.image} src={Git} width={80} alt='Git/Version Control' />Git</li>
            </ul>
            <ul className={styles.list}>
                <li className={`${styles.floating1} ${styles.skillImage}`}><Image className={styles.image} src={HTML} width={80} alt='HTML' />HTML</li>
                <li className={`${styles.floating} ${styles.skillImage}`}><Image className={styles.image} src={HyperLedger} width={80} alt='IBM Hyperledger' />Hyperledger</li>
                <li className={`${styles.floating2} ${styles.skillImage}`}><Image className={styles.image} src={MongoDB} width={80} alt='MongoDB' />MongoDB</li>
            </ul>
            <ul className={styles.list}>
                <li className={`${styles.floating4} ${styles.skillImage}`}><Image className={styles.image} src={CSS} width={100} alt='CSS' />CSS</li>
                <li className={`${styles.floating2} ${styles.skillImage}`}><Image className={styles.image} src={NextJS} width={80} alt='Nextjs' />NextJS</li>
                <li className={`${styles.floating1} ${styles.skillImage}`}><Image className={styles.image} src={NodeJS} width={80} alt='Node.js' />Node.js</li>
            </ul>
            <ul className={styles.list}>
                <li className={`${styles.floating3} ${styles.skillImage}`}><Image className={styles.image} src={Java} width={80} alt='Java' />Java</li>
                <li className={`${styles.floating1} ${styles.skillImage}`}><Image className={styles.image} src={SCCM} width={80} alt='SCCM' />SCCM</li>
                <li className={`${styles.floating2} ${styles.skillImage}`}><Image className={styles.image} src={Agile} width={80} alt='Agile Methdologies' />Agile</li>
            </ul>
        </div>
      </div>
      </div>
      </section>
    </>
  );
};

export default Experience;
