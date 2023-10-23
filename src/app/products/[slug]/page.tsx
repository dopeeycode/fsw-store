import { prismaClient } from '@/lib/prisma'
import React from 'react'

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

  return <div>{product?.name}</div>
}

export default ProductsDetailsPage
