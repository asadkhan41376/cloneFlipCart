import React from 'react'
import Benner from './Benner'
import ProductList from './ProductList'
import ProductsItems from './ProductItem'

const HomeSection = () => {
  return (
    <div>
      <ProductList/>
      <Benner/>
      <ProductsItems/>
    </div>
  )
}

export default HomeSection
