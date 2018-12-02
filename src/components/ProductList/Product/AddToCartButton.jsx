import React from 'react'
import styled from 'styled-components'
import { rgba } from 'polished'
import Button from '../../Button'

const AddToCartButton = ({ className, addToCart }) => (
  <Button className={className} onClick={addToCart}>Add to cart</Button>
)

export default styled(AddToCartButton)`
  background: transparent
  border: none
  border-top: 1px solid ${({ theme }) => rgba(theme.color, 0.3)};
  bottom: 0
  border-radius: 0
  color: ${({ theme }) => theme.color}
  padding: 1em
  position: absolute
  width: 100%
`
