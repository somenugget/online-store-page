import React, { Fragment, useEffect } from 'react'
import styled from 'styled-components'
import List from './List'
import ClearCartButton from './ClearCartButton'
import EmptyCart from './EmptyCart'

let menu = null;

const Menu = ({ className, cartItems, clearCart, products, closeMenu }) => {
  useEffect(() => {
    if(!menu) return

    const closeMenuOnClickOutside = (e) => {
      if (!menu.contains(e.target)) closeMenu()
    }

    document.addEventListener('click', closeMenuOnClickOutside, false);

    return () => document.removeEventListener('click', closeMenuOnClickOutside, false)
  })

  return (
    <div className={className} ref={ (node) => menu = node }>
      { Object.keys(cartItems).length ?
        <Fragment>
          <List cartItems={cartItems} products={products} />
          <ClearCartButton onClick={clearCart}>clear cart</ClearCartButton>
        </Fragment> :
       <EmptyCart/> }
    </div>
  )
}

export default styled(Menu)`
  background: ${({ theme }) => theme.background}
  border-radius: .25em
  box-shadow: 0px 0px 1px 0px ${({ theme }) => theme.color};
  right: 0
  position: absolute
  top: 3.25em
  width: 20em
  z-index: 2
`

