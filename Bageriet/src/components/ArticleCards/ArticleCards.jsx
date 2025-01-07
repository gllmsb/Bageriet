import React from 'react';
import styles from './ArticleCards.module.scss'; 
import article1 from '../../assets/images/article.jpg';
import article2 from '../../assets/images/article2.jpg';
import article3 from '../../assets/images/article3.jpg';

export const ArticleCards = () => {
  const articles = [
    {
      img: article1, 
      title: 'Kreativitet dyrkes',
      description: 'Der er mange tilgængelige udgaver af Lorem Ipsum...',
    },
    {
      img: article2,
      title: 'Vi elsker brød',
      description: 'Der er mange tilgængelige udgaver af Lorem Ipsum...',
    },
    {
      img: article3,
      title: 'Sans for detaljer',
      description: 'Der er mange tilgængelige udgaver af Lorem Ipsum...',
    },
  ];

  return (
    <div className={styles.articleContainer}> 
      <div className={styles.articles}>
        {articles.map((article, index) => (
          <div key={index} className={styles.articleCard}>
            <img src={article.img} alt={article.title} className={styles.articleImage} />
            <h3 className={styles.articleSubtitle}>{article.title}</h3>
            <p className={styles.articleText}>{article.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
