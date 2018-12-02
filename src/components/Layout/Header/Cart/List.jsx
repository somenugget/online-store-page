import React from 'react'
import styled from 'styled-components'
import ListItem from './ListItem'

const List = ({ className, cartItems, products }) => (
  <ul className={className}>
    {Object.keys(cartItems).map(productId => {
      const product = products.find(({ id }) => id === productId);

      if (!product) return null;

      return (
        <ListItem
          key={productId}
          product={product}
          quantity={cartItems[productId]}
        />
      )
    })}
  </ul>
)

export default styled(List)`
  padding: 0;
  margin: 0;
`
