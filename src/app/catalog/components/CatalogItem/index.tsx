import { Category } from '@prisma/client'
import Image from 'next/image'
import Link from 'next/link'

interface CatalogItemProps {
  category: Category
}

const CatalogItem = ({ category }: CatalogItemProps) => {
  return (
    <Link href={`/category/${category.slug}`} className="flex flex-col">
      <div
        className="flex h-[150px] w-full items-center justify-center 
      rounded-tl-lg rounded-tr-lg bg-category-item-gradient"
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
    </Link>
  )
}

export default CatalogItem
