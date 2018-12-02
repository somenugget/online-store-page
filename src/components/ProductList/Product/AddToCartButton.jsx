import React from 'react'
import styled from 'styled-components'

const AddToCartButton = ({ className, addToCart }) => (
  <button className={className} onClick={addToCart}>Add to cart</button>
)

export default styled(AddToCartButton)`
  background: transparent
  border-color: ${({ theme }) => theme.color}
  border: none;
  border-top: 1px solid #DDD;
  bottom: 0;
  color: ${({ theme }) => theme.color}
  padding: 1em;
  position: absolute;
  width: 100%;
`
