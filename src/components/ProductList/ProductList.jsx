import React from 'react'
import ProductListWrapper from './ProductListWrapper'
import Product from './Product'

const ProductList = ({ products, addToCart }) => {
  return (
    <ProductListWrapper>
      { products.map((product) => <Product key={product.id} product={product} addToCart={addToCart} />) }
    </ProductListWrapper>
  )
}

export default ProductList
