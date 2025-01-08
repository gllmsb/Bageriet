import React, { useEffect, useState } from 'react';
import styles from './NewArrivals.module.scss';

export const NewArrivals = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://api.mediehuset.net/bakeonline/products');
        const data = await response.json();
        setProducts(data.items.slice(0, 8));
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <section className={styles.newArrivalsSection}>
      <div className={styles.textContainer}>
        <h2 className={styles.sectionTitle}>Nyeste bagværk</h2>
        <p className={styles.sectionDescription}>
          Der er mange tilgængelige udgaver af Lorem Ipsum, men de fleste udgaver har gennemgået
          forandringer, når nogen har tilføjet humor eller tilfældige ord, som på ingen måde ser ægte ud.
        </p>
      </div>

      <div className={styles.productSectionWrapper}>
        <div className={styles.productSectionContainer}>
          {products.map((product) => (
            <div key={product.id} className={styles.productCard}>
              <img
                src={product.image.fullpath}
                alt={product.title}
                className={styles.productImage}
              />
              <div className={styles.productInfo}>
                <h3 className={styles.productTitle}>{product.title}</h3>
                <span className={styles.productComments}>{product.num_comments}</span>
                <p className={styles.productDescription}>{product.teaser.slice(0, 60)}{product.teaser.length > 60 && '...'}</p>
                <button className={styles.productButton}>SE MERE</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
