'use client'

import { Product } from '@prisma/client'
import Image from 'next/image'
import { useState } from 'react'

interface ProductImagesProps {
  product: Product
}

const ProductImages = ({ product }: ProductImagesProps) => {
  const imageUrls = product.imageUrls
  const [currentImage, setCurrentImage] = useState(imageUrls[0])

  function handleImageClick(imageUrl: string) {
    setCurrentImage(imageUrl)
  }

  return (
    <div className="flex flex-col">
      <b className="flex h-[380px] w-full items-center justify-center bg-accent">
        <Image
          src={currentImage}
          alt={product.name}
          width={0}
          height={0}
          sizes="100vw"
          className="h-auto max-h-[70%] w-auto max-w-[80%] object-contain"
        />
      </b>

      <div className="mt-8 grid grid-cols-4 gap-4 px-5">
        {imageUrls.map((imageUrl) => (
          <button
            onClick={() => handleImageClick(imageUrl)}
            key={imageUrl}
            className={`flex h-[80px] items-center justify-center rounded-lg bg-accent
            ${
              imageUrl === currentImage &&
              'border-2 border-solid border-primary'
            }`}
          >
            <Image
              src={imageUrl}
              alt={product.name}
              width={0}
              height={0}
              sizes="100vw"
              className="h-auto max-h-[70%] w-auto max-w-[80%] object-contain"
            />
          </button>
        ))}
      </div>
    </div>
  )
}

export default ProductImages
