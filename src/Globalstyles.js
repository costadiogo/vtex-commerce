import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        background: #17202A;
        font-family: Open-Sans, Helvetica, Sans-Serif;
        box-sizing: border-box;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 700;
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }

    a {
        list-style: none;
    }
`;

export default GlobalStyle;