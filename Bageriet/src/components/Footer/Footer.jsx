import React from 'react';
import { IoIosArrowUp } from "react-icons/io";
import styles from './Footer.module.scss';

export const Footer = () => {
  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <h1 className={styles.footerTitle}>bageriet</h1>
        <p className={styles.footerDescription}>
          Der er mange tilgængelige udgaver af Lorem Ipsum, men de fleste udgaver har
          gennemgået forandringer, når nogen har tilføjet humor eller tilfældige ord, som
          på ingen måde ser ægte ud.
        </p>
      </div>
      <div className={styles.footerBottom}>
        <p>Copyright © 2017 bageriet aps</p>
      </div>
      <button className={styles.backToTopButton} onClick={scrollToTop}>
      <IoIosArrowUp />
      </button>
    </footer>
  );
};
