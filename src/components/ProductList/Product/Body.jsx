import React from 'react'
import styled from 'styled-components';

const Body = ({ className, product }) => (
  <div className={className}>
    <h5>{ product.title }</h5>
    <p>{ product.price }$</p>
  </div>
)

export default styled(Body)`
  padding: 0 .5em;

  h5 {
    font-size: .85em;
    margin: 0 0 .5em;
  }

  p {
    margin: .25em 0;
  }
`
