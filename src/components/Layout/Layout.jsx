import React from 'react'
import Container from './Container'
import Header from './Header'

const Layout = ({ children, ...props }) => {
  return (
    <div>
      <Header { ...props } />
      <Container>
        { children }
      </Container>
    </div>
  )
}

export default Layout
