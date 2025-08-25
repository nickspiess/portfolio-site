import React, { useState, useEffect } from 'react';
import styles from './Tooltip.module.css';

const Tooltip = ({ children, content, position = 'top', delay = 200 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    let timeout;
    if (isVisible) {
      timeout = setTimeout(() => setShowTooltip(true), delay);
    } else {
      setShowTooltip(false);
    }
    return () => clearTimeout(timeout);
  }, [isVisible, delay]);

  const handleMouseEnter = () => {
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
  };

  const handleTouchStart = () => {
    setIsVisible(true);
  };

  const handleTouchEnd = () => {
    setTimeout(() => setIsVisible(false), 2000); // Show for 2 seconds on mobile
  };

  return (
    <div 
      className={styles.tooltipContainer}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {children}
      {showTooltip && (
        <div 
          className={`${styles.tooltip} ${styles[position]} ${showTooltip ? styles.visible : ''}`}
        >
          <div className={styles.tooltipContent}>
            {content}
          </div>
          <div className={styles.tooltipArrow}></div>
        </div>
      )}
    </div>
  );
};

export default Tooltip;