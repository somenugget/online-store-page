import styled from 'styled-components'

export default styled.span`
  background: ${({ theme }) => theme.badge};
  border-radius: .25em;
  color: ${({ theme }) => theme.color};
  display: inline-block;
  padding: 0 .5em;
  margin-left: 1em;
`
