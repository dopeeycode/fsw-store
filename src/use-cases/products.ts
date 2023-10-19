import { prismaClient } from "@/lib/prisma"
import { Product } from "@prisma/client"



export class ProductUseCase {
  async productsWithDealsBySlug(slug: 'mouses' | 'keyboards') {
    const productWithDeals = await prismaClient.product.findMany({
      where: {
        category: {
          slug,
        }
      }
    })

    return productWithDeals
  }

  async allProducutsWithDeals() {
    const productsWithDeal = await prismaClient.product.findMany({
      where: {
        discountPercentage: {
          gt: 0
        }
      }
    })

    return productsWithDeal
  }
}

export const productUseCase = new ProductUseCase()