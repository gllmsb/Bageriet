import React from 'react';
import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <h2 className={styles.footerTitle}>bageriet</h2>
        <p className={styles.footerDescription}>
          Der er mange tilgængelige udgaver af Lorem Ipsum, men de fleste udgaver har gennemgået
          forandringer, når nogen har tilføjet humor eller tilfældige ord, som på ingen måde ser ægte ud.
        </p>
      </div>
      <div className={styles.footerCopyright}>
        <p>Copyright © 2017 bageriet aps</p>
      </div>
    </footer>
  );
};
