import React from 'react'
import ListItemWrapper from './ListItemWrapper'
import ItemsBadge from './ItemsBadge'

const ListItem = ({ product, quantity }) => {
  return (
    <ListItemWrapper>
      <span>{ product.title }</span>
      <ItemsBadge>{ quantity }</ItemsBadge>
    </ListItemWrapper>
  )
}

export default ListItem
