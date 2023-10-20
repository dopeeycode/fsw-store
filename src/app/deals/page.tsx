import ProductItem from '@/components/ProductItem'
import { Badge } from '@/components/ui/badge'
import { productUseCase } from '@/use-cases/products'
import { cumputeProductTotalPrice } from '@/utils/product'
import { CircleDollarSign } from 'lucide-react'

const DealsPage = async () => {
  const products = await productUseCase.allProducutsWithDeals()

  return (
    <div className="p-5">
      <Badge
        className="w-fit gap-1 border-2 border-primary px-3 py-[0.375rem] text-base 
        uppercase leading-6 tracking-[0.12em]"
        variant="outline"
      >
        <CircleDollarSign size={18} />
        Ofertas
      </Badge>
      <div className="mt-8 grid grid-cols-2 gap-8">
        {products.map((product) => (
          <ProductItem
            key={product.id}
            product={cumputeProductTotalPrice(product)}
          />
        ))}
      </div>
    </div>
  )
}

export default DealsPage
