import React from 'react'
import styled from 'styled-components'
import Button from '../../../Button'
import ItemsBadge from './ItemsBadge'

const CartButton = ({ className, openMenu, itemsCount }) => (
  <Button className={className} onClick={openMenu}>
    Cart
    { !!itemsCount && <ItemsBadge>{ itemsCount }</ItemsBadge> }
  </Button>
)

export default styled(CartButton)`
  line-height: 1.75em
  padding: 1em 1.5em
`
