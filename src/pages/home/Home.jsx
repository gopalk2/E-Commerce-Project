import React, { useContext } from 'react'
import Layout from '../../components/layout/Layout'
import HeroSection from '../../components/heroSection/HeroSection'
import ProductCard from '../../components/productCard/ProductCard'

export default function Home() {
  return (
    <Layout>
        <HeroSection/>
        <ProductCard/>
    </Layout>
  )
}
