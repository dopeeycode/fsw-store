import React from 'react'
import CategoryItem from '../CategoryItem'
import { productUseCase } from '@/use-cases/products'

const Categories = async () => {
  const categories = await productUseCase.allCategoriesProducts()

  return (
    <div className="grid grid-cols-2 gap-x-4 gap-y-2">
      {categories.map((category) => (
        <CategoryItem category={category} key={category.id} />
      ))}
    </div>
  )
}

export default Categories
