import React from 'react'
import ListItem from './ListItem'
import ListWrapper from './ListWrapper'

const List = ({ cartItems, products }) => {
  return (
    <ListWrapper>
      { Object.keys(cartItems).map((productId) => {
        const product = products.find(({ id }) => id === productId)

        if (!product) return null

        return <ListItem key={productId} product={product} quantity={cartItems[productId]} />
      }) }
    </ListWrapper>
  )
}

export default List
