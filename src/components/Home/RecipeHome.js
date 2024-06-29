import React, { useEffect, useState } from 'react'

import Loader from '../../components/ui/Loader'
// import ProCard from './ProCard'
import RecipeCard from './RecipeCard'

const RecipeHome = () => {
  const [recipes, setRecipes] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchRecipes = async () => {
      setLoading(true)
      try {
        const response = await fetch(
          'https://667fe1f856c2c76b495a6c85.mockapi.io/api/list/recipes'
        )
        if (!response.ok) {
          throw new Error('Failed to fetch data')
        }
        const data = await response.json()
        setRecipes(data)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
      setLoading(false)
    }

    fetchRecipes()
  }, [])

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 md:gap-x-10 gap-y-16 mb-12 p-6 md:p-0">
      {loading ? (
        <Loader />
      ) : recipes?.length === 0 ? (
        <div className="text-center text-xl">No data found!</div>
      ) : (
        recipes.map(recipe => <RecipeCard key={recipe.id} {...recipe} />)
      )}
    </div>
  )
}

export default RecipeHome
