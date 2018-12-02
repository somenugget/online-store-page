import styled from 'styled-components'
import { rgba } from 'polished'

export default styled.li`
  align-items: flex-start;
  border-bottom: 1px solid ${({ theme }) => rgba(theme.color, 0.3)};;
  display: flex;
  justify-content: space-between;
  list-style: none;
  padding: 1em
`
