import React, { useState } from 'react';
import './Carousel.css'; // Make sure to create this CSS file

const Carousel = ({ children }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const count = React.Children.count(children);

    const goToPrevious = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const goToNext = () => {
        if (currentIndex < count - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    return (
        <div className="carousel-container">
            <div className="carousel-wrapper">
                {/* You can add buttons or any custom elements for controls */}
                <button onClick={goToPrevious}>&lt;</button>
                <div className="carousel-content-wrapper">
                    <div className="carousel-content" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                        {children}
                    </div>
                </div>
                <button onClick={goToNext}>&gt;</button>
            </div>
        </div>
    );
};

export default Carousel;
