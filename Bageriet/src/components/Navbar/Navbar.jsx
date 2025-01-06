import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.scss';

export const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles['nav-container']}>
        <ul className={styles.left}>
          <li><Link to="/">Forside</Link></li>
          <li><Link to="/products">Produkter</Link></li>
        </ul>

        <div className={styles['logo-wrapper']}>
          <Link to="/" className={styles.logo}>Bageriet</Link>
        </div>

        <ul className={styles.right}>
          <li><Link to="/contact">Kontakt</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </div>
    </nav>
  );
};




