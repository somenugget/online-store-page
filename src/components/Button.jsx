import styled from 'styled-components'

export default styled.button`
  background: transparent
  border-color: ${({ theme }) => theme.color}
  border-radius: .25em
  color: ${({ theme }) => theme.color}
  font-family: Roboto
  padding: 1em
`
