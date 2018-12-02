import React, { useState } from 'react'
import Button from './Button'
import Wrapper from './Wrapper'
import Menu from './Menu'
import ItemsBadge from './ItemsBadge'

const Cart = (props) => {
  const [isOpened, setIsOpened] = useState(false)
  const openMenu = () => setIsOpened(true)
  const closeMenu = () => setIsOpened(false)
  const itemsCount = Object.keys(props.cartItems).length

  return (
    <Wrapper>
      <Button onClick={openMenu}>
        Cart
        { !!itemsCount && <ItemsBadge>{ itemsCount }</ItemsBadge> }
      </Button>
      { isOpened && <Menu { ...props } closeMenu={closeMenu} /> }
    </Wrapper>
  )
}

export default Cart;
