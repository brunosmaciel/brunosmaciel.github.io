import { createGlobalStyle } from 'styled-components';
import * as colors from '../config/colors';

export default createGlobalStyle`
   *{
    margin: 0;
    padding: 0;
    outline:none;
    box-sizing:boder-box;
  }
  body{
    font-family:sans-serif;
    background:${colors.tertiaryColor};
    color:${colors.primaryColor};
  }
  html,body,#root{
    height:100%;
  }
  input[type="text"]{
    border: none;
    outline: none;
    background-color:${colors.secondaryColor};
  }
  ul,li{
    list-style:none;
    font-size:24px;
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color:${colors.primaryColor};
  }
`;
