import Image from "next/image"
import Categories from "./components/Categories"
import ProductList from "./components/ProductList"
import { prismaClient } from "@/lib/prisma"

const Home = async () => {
  const productsWithDeal = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0
      }
    }
  })

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
        className="h-auto w-full px-5"
        sizes="100vw"
        alt="Ate 55% de desconto em mouses!."
      /> 
    </>
  )
}

export default Home