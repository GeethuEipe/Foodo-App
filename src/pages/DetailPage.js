import Hero from '../components/ui/Hero'
import Layout from '../components/ui/Layout'
import React from 'react'
import RecipeDetails from '../components/Detail/RecipeDetails'
import { useLocation } from 'react-router-dom'

const DetailPage = () => {
  const location = useLocation()
  const { state } = location // Access the state
  console.log('state', state)
  return (
    <Layout>
      <Hero />
      {state?.length === 0 || state === null ? (
        <div className="text-center text-xl">No data found!</div>
      ) : (
        <RecipeDetails {...state} />
      )}
    </Layout>
  )
}
export default DetailPage
