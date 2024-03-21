'use client'
import Nav from '@components/nav'
import Hero from '@components/hero'
import AboutBrand from '@components/aboutBrand'
import SelectedProducts from '@components/selectedProducts'
import ProjectFeatures from '@components/projectFeatures'
import BestTea  from '@components/bestTea'
import Awards from '@components/awards'
import FAQ from '@components/faq'
import Elevate from '@components/elevate'
import Footer from '@components/footer'


function page() {
  return (
    <div>
      <Nav />
      <Hero />
      <AboutBrand />
      <SelectedProducts />
      <ProjectFeatures />
      <BestTea />
      <Awards  />
      <FAQ />
      <Elevate />
      <Footer />

    </div>
  )
}

export default page