import ProductItem from '@/components/ProductItem'
import { Badge } from '@/components/ui/badge'
import { CATEGORY_ICON } from '@/constants/category-icon'
import { productUseCase } from '@/use-cases/products'
import { cumputeProductTotalPrice } from '@/utils/product'

const CategoryProducts = async ({ params }: any) => {
  const category = await productUseCase.searchProductsBySlug(params.slug)
  return (
    <div className="p-5">
      <Badge
        className="w-fit gap-1 border-2 border-primary px-3 py-[0.375rem] text-base 
        uppercase leading-6 tracking-[0.12em]"
        variant="outline"
      >
        {CATEGORY_ICON[params.slug as keyof typeof CATEGORY_ICON]}
        {category?.name}
      </Badge>
      <div className="mt-8 grid grid-cols-2 gap-8">
        {category?.products.map((product) => (
          <ProductItem
            key={product.id}
            product={cumputeProductTotalPrice(product)}
          />
        ))}
      </div>
    </div>
  )
}

export default CategoryProducts
