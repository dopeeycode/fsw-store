import Image from "next/image"
import Categories from "./components/Categories"
import ProductList from "./components/ProductList"
import { productUseCase } from "@/use-cases/products"

const Home = async () => {
  const mousesWithDeals = await productUseCase.productsWithDealsBySlug('mouses')
  const keyboardsWithDeals = await productUseCase.productsWithDealsBySlug('keyboards')
  const productsWithDeal = await productUseCase.allProducutsWithDeals()
  
  return (
    <>
      <Image 
        src="/images/banner-home-01.png"
        width={0}
        height={0}
        className="h-auto w-full px-5"
        sizes="100vw"
        alt="Ate 55% de desconto esse mês!"
      /> 

      <div className="mt-8 px-5">
        <Categories />
      </div>

      <div className="mt-8">
        <p className="font-semibold uppercase mb-3 pl-5">Ofertas</p>
        <ProductList products={productsWithDeal} />
      </div>

      <Image 
        src="/images/banner-home-02.png"
        width={0}
        height={0}
        className="h-auto w-full px-5 mt-8"
        sizes="100vw"
        alt="Ate 55% de desconto em mouses!."
      /> 

      <div className="mt-8">
        <p className="font-semibold uppercase mb-3 pl-5">Teclados</p>
        <ProductList products={keyboardsWithDeals} />
      </div>

      <Image 
        src="/images/banner-home-03.png"
        width={0}
        height={0}
        className="h-auto w-full px-5 mt-8"
        sizes="100vw"
        alt="Ate 20% de desconto em mouses!."
      /> 

      <div className="mt-8">
        <p className="font-semibold uppercase mb-3 pl-5">Mouses</p>
        <ProductList products={mousesWithDeals} />
      </div>
    </>
  )
}

export default Home