import React from 'react'
import Benner from './Benner'
import ProductList from './ProductList'
import ProductsItems from './ProductItem'

import CategoryProduct from './CategoryProduct'

const HomeSection = () => {
  return (
    <div>
      <ProductList/>
      <Benner/>
      <ProductsItems/>
      <CategoryProduct/>
    </div>
  )
}

export default HomeSection
