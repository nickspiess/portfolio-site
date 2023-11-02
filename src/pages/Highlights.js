import React from 'react';
import styles from '../styles/Highlights.module.css'

const Highlights = () => {
  // Define the gallery data
  const galleries = [
    {
      name: 'Gallery 1',
      photos: [
        {
          url: '/images/Logo.png',
          caption: 'Photo 1',
        },
        {
          url: '/images/mountainBackdrop.jpeg',
          caption: 'Photo 2',
        },
        {
            url: '/images/mountainBackdrop2.jpeg',
            caption: 'Photo 2',
          },
        // Add more photos as needed
      ],
    },
    {
      name: 'Gallery 2',
      photos: [
        {
          url: '/images/mountainBackdrop1.jpeg',
          caption: 'Photo 1',
        },
        {
          url: '/images/mountainBackdrop2.jpeg',
          caption: 'Photo 2',
        },
        // Add more photos as needed
      ],
    },
    // Add more galleries as needed
  ];

  return (
      <>
      <header className={styles.galleryHead}>
          <h2 className={styles.header}>Highlights</h2>
      </header>
        <div>
        {/* Other content */}
        {/* Other content */}
        </div>
    </>
  );
};

export default Highlights;
