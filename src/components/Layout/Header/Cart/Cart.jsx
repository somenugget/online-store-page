import React, { useState } from 'react'
import styled from 'styled-components'
import CartButton from './CartButton'
import Menu from './Menu'

const Cart = ({ className, ...props }) => {
  const [isOpened, setIsOpened] = useState(false);
  const openMenu = () => setIsOpened(true);
  const closeMenu = () => setIsOpened(false);
  const itemsCount = Object.keys(props.cartItems).length;

  return (
    <div className={className}>
      <CartButton openMenu={openMenu} itemsCount={itemsCount} />
      { isOpened && <Menu {...props} closeMenu={closeMenu} /> }
    </div>
  )
}

export default styled(Cart)`
  position: relative;
`
