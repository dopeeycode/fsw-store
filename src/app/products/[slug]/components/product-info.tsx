'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { formatPrice } from '@/utils/format-price'
import { ProductsWithTotalPrice } from '@/utils/product'
import {
  ArrowDownIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  TruckIcon,
} from 'lucide-react'
import { useState } from 'react'

interface ProductInfoProps {
  product: Pick<
    ProductsWithTotalPrice,
    'basePrice' | 'description' | 'discountPercentage' | 'name' | 'totalPrice'
  >
}

const ProductInfo = ({
  product: { basePrice, description, discountPercentage, name, totalPrice },
}: ProductInfoProps) => {
  const [quantity, setQuantity] = useState(1)

  function handleIncreaseQuantityClick() {
    setQuantity((prevState) => prevState + 1)
  }

  function handleDecreaseQuantityClick() {
    setQuantity((prevState) => (prevState === 1 ? prevState : prevState - 1))
  }

  return (
    <div className="flex flex-col px-5">
      <h2 className="text-lg">{name}</h2>

      <div className="flex items-center gap-1">
        <h1 className="text-xl font-semibold">
          {formatPrice.format(totalPrice)}
        </h1>

        {discountPercentage > 0 && (
          <Badge className="px-3 py-[2px]">
            <ArrowDownIcon size={14} /> {discountPercentage}%
          </Badge>
        )}
      </div>

      {discountPercentage > 0 && (
        <p className="text-xs line-through opacity-75">
          {formatPrice.format(Number(basePrice))}
        </p>
      )}

      <div className="mt-5 flex items-center gap-3">
        <Button
          onClick={handleDecreaseQuantityClick}
          variant="outline"
          size="icon"
        >
          <ArrowLeftIcon size={16} />
        </Button>

        <span>{quantity}</span>

        <Button
          onClick={handleIncreaseQuantityClick}
          variant="outline"
          size="icon"
        >
          <ArrowRightIcon size={16} />
        </Button>
      </div>

      <div className="mt-8 flex flex-col gap-3">
        <h3 className="text-base font-bold">Descrição</h3>

        <p className="text-justify text-sm opacity-60">{description}</p>
      </div>

      <Button className="mt-8 font-bold uppercase">
        Adicionar ao carrinho
      </Button>

      <div className="mt-5 flex items-center justify-between rounded-lg bg-accent px-5 py-2">
        <div className="flex items-center gap-2">
          <TruckIcon />

          <div className="flex flex-col">
            <p className="text-xs">
              Entrega via <span className="font-bold">FSPacket®</span>
            </p>
            <p className="text-xs text-[#8162FF]">
              Envio para <span className="font-bold">todo Brasil</span>
            </p>
          </div>
        </div>

        <p className="text-xs font-bold">Frete grátis</p>
      </div>
    </div>
  )
}

export default ProductInfo
