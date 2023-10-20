import { Category } from '@prisma/client'
import Image from 'next/image'

interface CatalogItemProps {
  category: Category
}

const CatalogItem = ({ category }: CatalogItemProps) => {
  return (
    <div className="flex flex-col">
      <div
        className="bg-category-item-gradient flex h-[150px] w-full items-center 
      justify-center rounded-tl-lg rounded-tr-lg"
      >
        <Image
          src={category.imageUrl}
          alt={category.name}
          width={0}
          height={0}
          sizes="100vw"
          style={{
            objectFit: 'contain',
          }}
          className="h-auto max-h-[70%] w-auto max-w-[80%]"
        />
      </div>

      <div className="rounded-bl-lg rounded-br-lg bg-accent py-1 text-center">
        <strong className="text-[0.875rem] font-bold">{category.name}</strong>
      </div>
    </div>
  )
}

export default CatalogItem
