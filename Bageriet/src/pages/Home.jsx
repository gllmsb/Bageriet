import React from 'react'
import { Header } from '../components/Header/Header'
import { Article } from '../components/Article/Article'
import { Newsletter } from '../components/Newsletter/Newsletter'
import { NewArrivals } from '../components/NewArrivals/NewArrivals'

export const Home = () => {
  return (
    <>
    <Header/>
    <Article/>
    <Newsletter/>
    <NewArrivals/>
    </>
  )
}
