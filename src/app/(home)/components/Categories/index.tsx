import React from 'react'
import CategoryItem from '../CategoryItem'
import { Category } from '@prisma/client'
import { prismaClient } from '@/lib/prisma'

interface CategoriesProps {
  category: Category[]
}

const Categories = async () => {
  const categories = await prismaClient.category.findMany({})

  return (
    <div className="grid grid-cols-2 gap-y-2 gap-x-4">
      {categories.map(category => (
        <CategoryItem category={category} key={category.id} />
      ))}
    </div>
  )
}

export default Categories