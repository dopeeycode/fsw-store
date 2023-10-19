import ProductItem from "@/components/ProductItem"
import { cumputeProductTotalPrice } from "@/utils/product"
import { Product } from "@prisma/client"

interface ProductListProps {
  products: Product[]
}


const ProductList = ({ products }: ProductListProps) => {
  return (
    <div className="flex w-full gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden px-5">
      {products.map(product => (
        <ProductItem key={product.id} product={cumputeProductTotalPrice(product)} />
      ))}
    </div>
  )
}

export default ProductList