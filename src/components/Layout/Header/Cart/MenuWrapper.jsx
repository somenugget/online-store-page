import styled from 'styled-components'

export default styled.div`
  background: ${({ theme }) => theme.background}
  border-radius: .25em
  box-shadow: 0px 0px 1px 0px ${({ theme }) => theme.color};
  right: 0
  position: absolute
  top: 3.25em
  width: 20em
  z-index: 2
`
