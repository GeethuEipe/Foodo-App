import Hero from '../components/ui/Hero'
import Layout from '../components/ui/Layout'
import React from 'react'
import RecipeHome from '../components/Home/RecipeHome'

const Favourites = () => {
  return (
    <Layout>
      <Hero />
      <h1 className="text-2xl mb-16 text-center">Favourites</h1>
    </Layout>
  )
}

export default Favourites
