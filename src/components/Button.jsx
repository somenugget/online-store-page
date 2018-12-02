import styled from 'styled-components'
import { rgba } from 'polished'

export default styled.button`
  background: transparent
  border-color: ${({ theme }) => theme.color}
  border-radius: .25em
  color: ${({ theme }) => theme.color}
  cursor: pointer
  font-family: Roboto
  padding: 1em
  transition: all .25s

  &:hover {
    background: ${({ theme }) => rgba(theme.color, 0.1)}
  }
`
