import React, { useState, useEffect } from 'react';
import slide1 from '../../assets/images/slide1.jpg';
import slide2 from '../../assets/images/slide2.jpg';
import slide3 from '../../assets/images/slide3.jpg';
import styles from './Header.module.scss';

export const Header = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    { img: slide1, caption: 'Vi elsker at lave brød' },
    { img: slide2, caption: 'Frisk bageri hver dag' },
    { img: slide3, caption: 'Smagen af hjemmebag' }
  ];
  
//**The modulus operator (%) in this code ensures that the index value wraps around when it goes out of bounds */
//** If prevIndex is 2 and slides.length is 3, then 2 + 1 = 3. But 3 % 3 = 0, so the next slide is the first one.*/

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 10000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles['sliderContainer']}>
        <div className={styles.slider}>
          <img
            src={slides[currentIndex].img}
            alt="Bageri"
            className={styles['sliderImage']}
          />
          <div className={styles.caption}>{slides[currentIndex].caption}</div>

          <div className={styles['sliderControls']}>
            <button onClick={prevSlide} className={styles['prevBtn']}>
              &#10094;
            </button>
            <button onClick={nextSlide} className={styles['nextBtn']}>
              &#10095;
            </button>
          </div>

          <div className={styles['pagination']}>
            {slides.map((_, index) => (
              <span
                key={index}
                className={`${styles['dot']} ${currentIndex === index ? styles.active : ''}`}
                onClick={() => setCurrentIndex(index)}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};
