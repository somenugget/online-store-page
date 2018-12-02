import React from 'react'
import styled from 'styled-components'

const EmptyCart = ({ className }) => (
  <p className={className}>Your cart is empty :(</p>
)

export default styled(EmptyCart)`
  padding: .25em 1em
`
