import React from 'react'
import styled from 'styled-components'

const Image = ({ className, src, alt }) => (
  <div className={className}>
    <img src={src} alt={alt} />
  </div>
)

export default styled(Image)`
  padding: .5em;

  img {
    width: 100%;
  }
`
