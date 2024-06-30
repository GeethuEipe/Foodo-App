import '../App.css'

import Hero from '../components/ui/Hero'
import Layout from '../components/ui/Layout'
import React from 'react'
import RecipeHome from '../components/Home/RecipeHome'

const Home = () => {
  return (
    <Layout>
      <Hero />
      <RecipeHome />
    </Layout>
  )
}
export default Home
