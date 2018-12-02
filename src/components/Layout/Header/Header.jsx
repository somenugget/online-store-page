import React from 'react'
import Container from './Container'
import Button from '../../Button'
import Cart from './Cart'
import Wrapper from './Wrapper'

const Header = ({ toggleTheme, ...cartProps }) => {
  return (
    <Wrapper>
      <Container>
        <Button onClick={toggleTheme}>Change theme</Button>
        <Cart { ...cartProps } />
      </Container>
    </Wrapper>
  )
}

export default Header
