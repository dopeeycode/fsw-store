import { Badge } from '@/components/ui/badge'
import { productUseCase } from '@/use-cases/products'
import { ShapesIcon } from 'lucide-react'
import React from 'react'
import CatalogItem from './components/CatalogItem'

const CatalogPage = async () => {
  const categories = await productUseCase.allCategoriesProducts()

  return (
    <div className="p-5">
      <Badge
        className="gap-1 border-2 border-primary px-3 py-[0.375rem] text-base 
        uppercase leading-6 tracking-[0.12em]"
        variant="outline"
      >
        <ShapesIcon size={18} />
        Catálogo
      </Badge>

      <section className="mt-8 grid grid-cols-2 gap-[1.88rem]">
        {categories.map((category) => (
          <CatalogItem key={category.id} category={category} />
        ))}
      </section>
    </div>
  )
}

export default CatalogPage
