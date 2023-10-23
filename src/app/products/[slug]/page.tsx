import { prismaClient } from '@/lib/prisma'
import React from 'react'
import ProductImages from './components/product-images'

interface ProductsDetailsPageProps {
  params: {
    slug: string
  }
}

const ProductsDetailsPage = async ({
  params: { slug },
}: ProductsDetailsPageProps) => {
  const product = await prismaClient.product.findFirst({
    where: {
      slug,
    },
  })

  if (!product) return null

  return (
    <div>
      <ProductImages product={product} />
    </div>
  )
}

export default ProductsDetailsPage
