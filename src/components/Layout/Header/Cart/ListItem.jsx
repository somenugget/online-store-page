import React from 'react'
import styled from 'styled-components'
import { rgba } from 'polished'
import ItemsBadge from './ItemsBadge'

const ListItem = ({ product: { title }, className, quantity }) => (
  <li className={className}>
    <span>{ title }</span>
    <ItemsBadge>{ quantity }</ItemsBadge>
  </li>
)

export default styled(ListItem)`
  align-items: flex-start;
  border-bottom: 1px solid ${({ theme }) => rgba(theme.color, 0.3)};;
  display: flex;
  justify-content: space-between;
  list-style: none;
  padding: 1em
`
