import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    body{
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        font-size: 16px;
        text-align: justify;
        color: white;
        background-color: #202023;
        font-weight: 400;
    }

    a {
        text-decoration: none;
        opacity: 1;
        color: rgb(236 72 153);
        transition-property: all;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: .3s;
    }

    img {
        max-width: 100%;
    }

    a:hover {
        text-decoration:  underline;
        opacity: 0.7;
    }
    
    h2 {
        display: inline-block;
        margin-top: 24px;
        margin-bottom: 16px;
        font-size: 20px;
        font-weight: 600;
        border-bottom: solid 3px;
        letter-spacing: 0.1rem;
        line-height: 1.2;
        font-family: "M PLUS Rounded 1c", sans-serif;
    }

    h3 {
        margin: 0;
    }
    
    ul {
        margin: 0;
        padding: 0;
        list-style-type: none;
    }

    p {
        margin: 0;
    }
`;

export default GlobalStyle;
