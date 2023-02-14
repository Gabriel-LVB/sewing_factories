import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        word-wrap: break-word;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
    body{
        height: 100vh;
        width: 100vw;
        background-color: #5c5c5c;
    }
    #root{
        height: 100vh;
        width: 100vw;
        display: flex;
        flex: 100vw;
        
        
        }
`;
export default GlobalStyles;
