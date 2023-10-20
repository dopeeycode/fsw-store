import { ProductsWithTotalPrice } from '@/utils/product'
import Image from 'next/image'
import { Badge } from '../ui/badge'
import { ArrowDownIcon } from 'lucide-react'
import { formatPrice } from '@/utils/format-price'

interface ProductItemProps {
  product: ProductsWithTotalPrice
}

const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <div className="flex flex-col gap-4">
      <div
        className="relative flex h-[170px] w-full items-center justify-center
       rounded-lg bg-accent"
      >
        <Image
          src={product.imageUrls[0]}
          alt={product.name}
          width={0}
          height={0}
          sizes="100vw"
          className="h-auto max-h-[70%] w-auto max-w-[80%]"
          style={{
            objectFit: 'contain',
          }}
        />
        {product.discountPercentage > 0 && (
          <Badge className="absolute left-2 top-2 px-3 py-[2px]">
            <ArrowDownIcon size={14} /> {product.discountPercentage}%
          </Badge>
        )}
      </div>

      <div>
        <p className="overflow-hidden text-ellipsis whitespace-nowrap text-sm">
          {product.name}
        </p>

        <div className="flex items-center gap-2">
          {product.discountPercentage > 0 ? (
            <>
              <p className="font-semibold">
                {formatPrice.format(product.totalPrice)}
              </p>
              <p
                className="overflow-hidden text-ellipsis whitespace-nowrap text-xs 
                text-zinc-700 line-through opacity-75"
              >
                {formatPrice.format(Number(product.basePrice))}
              </p>
            </>
          ) : (
            <p className="font-semibold">
              {formatPrice.format(Number(product.basePrice))}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProductItem
