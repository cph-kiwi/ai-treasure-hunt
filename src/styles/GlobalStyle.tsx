import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
    }
    * {
        margin: 0;
    }
    body {
        font-family: ${({ theme }) => theme.fonts.main};
        background-color: ${({ theme }) => theme.colors.background};
        color: ${({ theme }) => theme.colors.text};
        padding: 0;
        line-height: 1.5;
        -webkit-font-smoothing: antialiased;
    }
    img, picture, video, canvas, svg {
        display: block;
        max-width: 100%;
    }
    input, button, textarea, select {
        font: inherit;
    }
    p, h1, h2, h3, h4, h5, h6 {
        overflow-wrap: break-word;
    }
    p {
        text-wrap: pretty;
    }
    h1, h2, h3, h4, h5, h6 {
        text-wrap: balance;
    }
    #root, #__next {
        isolation: isolate;
    }
`;

export default GlobalStyle;
