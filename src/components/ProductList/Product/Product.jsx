import React from 'react'
import styled from 'styled-components';
import Image from './Image'
import Body from './Body'
import AddToCartButton from './AddToCartButton'

const Product = ({ className, product, addToCart }) => {
  return (
    <div className={className}>
      <Image src={product.imageUrl} alt={product.title}/>
      <Body product={product}/>
      <AddToCartButton addToCart={() => addToCart(product.id)}/>
    </div>
  )
}

export default styled(Product)`
  box-shadow: 0px 0px 1px 0px ${({ theme }) => theme.color};
  border-radius: .2em;
  margin: 1em 0;
  max-width: calc(25% - .8em);
  padding-bottom: 3em;
  position: relative;

  &:nth-child(4n+1),
  &:nth-child(4n+2),
  &:nth-child(4n+3) {
    margin-right: 1em;
  }
`
