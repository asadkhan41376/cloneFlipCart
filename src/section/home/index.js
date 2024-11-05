import React from 'react'
import Benner from './Benner'
import ProductList from './ProductList'
import ProductsItems from './ProductItem'
import MensCloth from './MensCloth'

const HomeSection = () => {
  return (
    <div>
      <ProductList/>
      <Benner/>
      <ProductsItems/>
      <MensCloth/>
    </div>
  )
}

export default HomeSection
