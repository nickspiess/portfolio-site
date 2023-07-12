import React, { useState } from 'react';
import styles from '../styles/CareerExperiences.module.css';

const CareerExperiences = () => {
  const [selectedExperience, setSelectedExperience] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isNextExperience, setIsNextExperience] = useState(false);

  const experiences = [
    {
      title: 'Python Developer',
      position: 'Python Developer',
      company: 'SlingTV',
      timeline: '06/2022 - 06/2023',
      description: "• Build Automation systems using Python's Behave framework.<br />• Perform end-to-end regression testing for Dynamic Ad Insertion technologies serving millions of customers.<br />• Convert business requirements into automation programs by interacting with developers and QA teams.<br />",
    },
    {
      title: 'Web Developer',
      position: 'Web Developer',
      company: 'Spiess Technologies',
      timeline: '11/2022 - Present',
      description: "• Create websites using React and Nextjs frameworks for small businesses.<br />• Work with clients to understand their business needs.<br />• Create mockups and wireframes for design pitching.<br />",
    },
    {
      title: 'Marketing Coordinator',
      position: 'Marketing Coordinator',
      company: 'Gweihir Project',
      timeline: '01/2023 - Present',
      description: '• Oversee community relationship efforts and project branding.<br />• Represent the project and team at technical conferences.<br />',
    },
    {
      title: 'Student System Admin',
      position: 'Student System Administrator',
      company: 'UW-Eau Claire',
      timeline: '01/2019 - 05/2020',
      description: '• Create automated academic/campus software installations using Powershell and scripting tools.<br />• Package installations into SCCM and deploy to 500+ systems on UWEC campus.',
    },
    {
      title: 'Lead Desktop Support Analyst',
      position: 'Lead Desktop Support Analyst',
      company: 'UW-Eau Claire',
      timeline: '07/2018 - 12/2018',
      description: '• Oversee Desktop Team and report to superiors on project progress.<br />• Provide software and hardware support to 500+ systems on UWEC campus.<br />',
    },
    // Add more experiences as needed
  ];

  const handleExperienceClick = (index) => {
    if (index !== selectedExperience && !isTransitioning) {
      setIsNextExperience(index > selectedExperience);
      setIsTransitioning(true);
      setTimeout(() => {
        setSelectedExperience(index);
        setIsTransitioning(false);
      }, 400);
    }
  };

  return (
    <div className={styles.resumeContainer}>
      <div className={styles.experienceBar}>
        {experiences.map((experience, index) => (
          <div
            key={index}
            className={`${styles.title} ${
              selectedExperience === index ? styles.selected : ''
            }`}
            onClick={() => handleExperienceClick(index)}
          >
            {experience.title}
          </div>
        ))}
      </div>

      <div
        className={`${styles.experienceDetails} ${
          isTransitioning ? (isNextExperience ? styles.slideRight : styles.slideLeft) : styles.show
        }`}
      >
        <h2 className={styles.position}>{experiences[selectedExperience].position}</h2>
        <h3 className={styles.company}>{experiences[selectedExperience].company}</h3>
        <hr className={styles.line2} />
        <p className={styles.timeline}>{experiences[selectedExperience].timeline}</p>
        <hr className={styles.line} />
        <div
          className={styles.description}
          dangerouslySetInnerHTML={{ __html: experiences[selectedExperience].description }}
        ></div>
      </div>
    </div>
  );
};

export default CareerExperiences;
