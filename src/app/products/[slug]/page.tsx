import { prismaClient } from '@/lib/prisma'
import React from 'react'
import ProductImages from './components/product-images'
import ProductInfo from './components/product-info'
import { cumputeProductTotalPrice } from '@/utils/product'
import ProductList from '@/app/(home)/components/ProductList'

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
    include: {
      category: {
        include: {
          products: {
            where: {
              slug: {
                not: slug,
              },
            },
          },
        },
      },
    },
  })

  if (!product) return null

  return (
    <main className="flex flex-col gap-8 pb-8">
      <ProductImages product={product} />
      <ProductInfo product={cumputeProductTotalPrice(product)} />

      <div>
        <h1 className="mb-3 pl-5 font-bold uppercase">Produtos recomendados</h1>
        <ProductList products={product.category.products} />
      </div>
    </main>
  )
}

export default ProductsDetailsPage
