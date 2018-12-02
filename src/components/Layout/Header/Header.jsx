import React from 'react'
import styled from 'styled-components'
import Container from './Container'
import Button from '../../Button'
import Cart from './Cart'

const Header = ({ className, toggleTheme, ...cartProps }) =>  (
  <header className={className}>
    <Container>
      <Button onClick={toggleTheme}>Change theme</Button>
      <Cart { ...cartProps } />
    </Container>
  </header>
)

export default styled(Header)`
  background: ${({ theme }) => theme.header};
`
