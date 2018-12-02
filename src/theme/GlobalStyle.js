import { createGlobalStyle } from 'styled-components'

export const light = {
  background: '#FFF',
  color: '#000',
  header: '#DDD',
  badge: '#AAA'
};

export const dark = {
  background: '#222',
  color: '#FFF',
  header: '#000',
  badge: '#333'
};

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat|Roboto');

  * {
    box-sizing: border-box;
  }

  body {
    background: ${props => props.theme.background};
    color: ${props => props.theme.color};
    font-family: Roboto;
    padding: 0;
    margin: 0;
  }
`
