import React from 'react'
import Carousel from '../components/Carousel'
import RecipeCategory from '../components/RecipeCategory'
import Header from '../components/Header'
import Footer from '../components/Footer'

function MainPage() {
  return (
    <>
      
      <Header/>
      <Carousel/>
      <RecipeCategory/>
      <Footer/>
    </>
  )
}

export default MainPage