import React, { Fragment, useState } from 'react';
import { ThemeProvider }  from 'styled-components'

import GlobalStyle, { light, dark } from './theme/GlobalStyle';
import Layout from './components/Layout'
import products from './products'

const App = () => {
  const [cartItems, setCartItems] = useState({ 1: 1, 2: 2})
  const addToCart = (productId) => {
    cartItems[productId] = cartItems[productId] ? cartItems[productId]++ : 1
    setCartItems({ ...cartItems })
  }
  const clearCart = () => setCartItems({})

  const [theme, setTheme] = useState('light');
  const currentTheme = theme === 'light' ? light : dark
  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light')

  return (
    <ThemeProvider theme={currentTheme}>
      <Fragment>
        <GlobalStyle/>
        <Layout
          toggleTheme={toggleTheme}
          clearCart={clearCart}
          cartItems={cartItems}
          products={products}
        >
          Products list will be here
        </Layout>
      </Fragment>
    </ThemeProvider>
  );
}

export default App;
