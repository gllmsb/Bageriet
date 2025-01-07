import React, { useState } from 'react';
import styles from './Newsletter.module.scss';

export const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateEmail(email)) {
      alert('Successfully subscribed!');
    } else {
      setIsValid(false); 
    }
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
    setIsValid(true); 
  };

  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  return (
    <section className={styles.newsletterSection}>
      <div className={styles.newsletterContainer}>
        <h2>Tilmeld dig vores nyhedsbrev</h2>
        <p>Der er mange tilgængelige udgaver af Lorem Ipsum...</p>
        <form onSubmit={handleSubmit} className={styles.newsletterForm}>
          <div className={styles.inputContainer}>
            <div className={styles.iconBox}>
              <img src="../src/assets/images/email.png" alt="email icon" className={styles.emailIcon} />
            </div>
            <div className={styles.inputBox}>
              <input
                type="email"
                value={email}
                onChange={handleChange}
                placeholder="indtast din email..."
                className={isValid ? styles.inputField : `${styles.inputField} ${styles.invalid}`}
              />
            </div>
            <div className={styles.submitBox}>
              <button type="submit" className={styles.submitButton}>
                TILMELD
              </button>
            </div>
          </div>
          {!isValid && <span className={styles.errorText}>Indtast en gyldig email</span>}
        </form>
      </div>
    </section>
  );
};
