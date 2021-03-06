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

    .react-modal-overlay {
        background: rgba(0, 0, 0, 0.5);

        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;

        display: flex;
        align-items: center;
        justify-content: center;
        
    }

    .react-modal-content {
        width: 100%;
        max-width: 576px;
        background: var(--background);
        padding: 3rem;
        position: relative;
        border-radius: 0.24rem;

    }

    .react-modal-close {
        position: absolute;
        right: 1.5rem;
        top: 1.5rem;
        border: 0;
        background: transparent;

        transition: 0.2s; 

        &:hover {
            filter: brightness(0.8);
        }
    }
`;

export default GlobalStyle;