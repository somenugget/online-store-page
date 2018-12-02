import React, { Fragment, useEffect } from 'react'
import MenuWrapper from './MenuWrapper'
import List from './List'
import ClearCartButton from './ClearCartButton'

let menu = null;

const Menu = ({ cartItems, clearCart, products, closeMenu }) => {
  useEffect(() => {
    if(!menu) return

    const closeMenuOnClickOutside = (e) => {
      if (!menu.contains(e.target)) closeMenu()
    }

    document.addEventListener('click', closeMenuOnClickOutside, false);

    return () => document.removeEventListener('click', closeMenuOnClickOutside, false)
  })

  return (
    <MenuWrapper ref={ (node) => menu = node }>
      { !!Object.keys(cartItems).length ?
        <Fragment>
          <List cartItems={cartItems} products={products} />
          <ClearCartButton onClick={clearCart}>clear cart</ClearCartButton>
        </Fragment> :
       'Your cart is empty' }
    </MenuWrapper>
  )
}

export default Menu
