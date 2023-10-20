import { prismaClient } from '@/lib/prisma'

export class ProductUseCase {
  async searchProductsBySlug(
    slug:
      | 'mouses'
      | 'keyboards'
      | 'headphones'
      | 'mousepads'
      | 'monitors'
      | 'speakers',
  ) {
    const products = await prismaClient.category.findFirst({
      where: {
        slug,
      },
      include: {
        products: true,
      },
    })

    return products
  }

  async searchProductsBySlugWithDeals(
    slug:
      | 'mouses'
      | 'keyboards'
      | 'headphones'
      | 'mousepads'
      | 'monitors'
      | 'speakers',
  ) {
    const products = await prismaClient.product.findMany({
      where: {
        category: {
          slug,
        },
      },
    })

    return products
  }

  async allProducutsWithDeals() {
    const products = await prismaClient.product.findMany({
      where: {
        discountPercentage: {
          gt: 0,
        },
      },
    })

    return products
  }

  async allCategoriesProducts() {
    const categories = await prismaClient.category.findMany()

    return categories
  }
}

export const productUseCase = new ProductUseCase()
