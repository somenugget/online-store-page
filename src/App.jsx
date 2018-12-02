import React, { Fragment, useState } from 'react';
import { ThemeProvider }  from 'styled-components'

import GlobalStyle, { light, dark } from './theme/GlobalStyle';
import Layout from './components/Layout'
import ProductList from './components/ProductList'
import products from './products'

const defaultTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

const App = () => {
  const [theme, setTheme] = useState(defaultTheme);
  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light')
  const currentTheme = theme === 'light' ? light : dark

  const [cartItems, setCartItems] = useState({})
  const addToCart = (productId) => {
    cartItems[productId] = cartItems[productId] ? cartItems[productId] + 1 : 1
    setCartItems({ ...cartItems })
  }
  const clearCart = () => setCartItems({})

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
          <ProductList
            products={products}
            addToCart={addToCart}
          />
        </Layout>
      </Fragment>
    </ThemeProvider>
  );
}

export default App;
