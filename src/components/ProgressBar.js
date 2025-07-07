import React from 'react';
import styles from '../styles/ProcessForm.module.css'; // Use the same CSS file

const ProgressBar = ({ step, totalSteps }) => {
  const progress = (step / totalSteps) * 100;

  return (
    <div className={styles.progressContainer}>
      <div className={styles.progressBarTrack}>
        <div className={styles.progressBar} style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
};

export default ProgressBar;