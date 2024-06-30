import React, { useCallback, useEffect, useState } from 'react'

import Loader from '../../components/ui/Loader'
import ProCard from './ProCard'
import RecipeCard from './RecipeCard'

const MemoizedRecipeCard = React.memo(RecipeCard)
const MemoizedProCard = React.memo(ProCard)

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

  const renderRecipeCard = useCallback((recipe, index) => {
    return index === 3 ? (
      <MemoizedProCard key={recipe.id} {...recipe} />
    ) : (
      <MemoizedRecipeCard key={recipe.id} {...recipe} />
    )
  }, [])

  return (
    <div className="flex justify-center items-center">
      {loading ? (
        <Loader />
      ) : recipes?.length === 0 ? (
        <div className="text-center text-xl">No data found!</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16 mb-12 p-6 md:p-0">
          {recipes.map(renderRecipeCard)}
        </div>
      )}
    </div>
  )
}

export default RecipeHome
