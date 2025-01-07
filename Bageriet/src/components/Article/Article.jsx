import React from 'react'
import styles from './Article.module.scss';
import { ArticleCards } from '../ArticleCards/ArticleCards';

export const Article = () => {
  return (
    <>
    <section className={styles.articleContainer}>
        <h2 className={styles.articleTitle}>Vi skaber lækkert! brød</h2>
        <p className={styles.articleDescription}>
        Der er mange tilgængelige udgaver af Lorem Ipsum, men de fleste udgaver har gennemgået forandringer, når nogen har tilføjet humor eller tilfældige ord, som på ingen måde ser ægte ud
        </p>
        <ArticleCards/>
    </section>
    </>
  )
}
