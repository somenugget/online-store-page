import React from 'react'
import styled from 'styled-components'
import Product from './Product'

const ProductList = ({ className, products, addToCart }) => (
  <div className={className}>
    { products.map((product) => (
      <Product key={product.id} product={product} addToCart={() => addToCart(product.id)} />
    )) }
  </div>
)

export default styled(ProductList)`
  display: flex;
  flex-wrap: wrap;
`
