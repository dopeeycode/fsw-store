import Categories from './components/Categories'
import ProductList from './components/ProductList'
import SectionTitle from '@/components/SectionTitle'
import Banner from './components/Banner'
import { productUseCase } from '@/use-cases/products'

const Home = async () => {
  const mousesWithDeals = await productUseCase.productsWithDealsBySlug('mouses')
  const keyboardsWithDeals =
    await productUseCase.productsWithDealsBySlug('keyboards')
  const productsWithDeal = await productUseCase.allProducutsWithDeals()

  return (
    <div className="flex flex-col gap-8 py-8">
      <Banner src="banner-home-01.png" alt="Ate 55% de desconto esse mês!" />

      <div className="px-5">
        <Categories />
      </div>

      <div className="">
        <SectionTitle>Ofertas</SectionTitle>
        <ProductList products={productsWithDeal} />
      </div>

      <Banner src="banner-home-02.png" alt="Ate 55% de desconto em mouses!" />

      <div className="">
        <SectionTitle>Teclados</SectionTitle>
        <ProductList products={keyboardsWithDeals} />
      </div>

      <Banner src="banner-home-03.png" alt="Ate 55% de desconto em fones!" />

      <div className="">
        <SectionTitle>Mouses</SectionTitle>
        <ProductList products={mousesWithDeals} />
      </div>
    </div>
  )
}

export default Home
