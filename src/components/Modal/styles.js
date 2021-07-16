
import styled from 'styled-components';
export const Container = styled.form`

    h2 {
        color:  #3D7BD5;
        size: 1.5rem;
        margin-bottom: 2rem;
    }

    input {
        width: 527px;
        padding: 0 1.5rem;
        height: 3rem;
        border-radius: 0.25rem;

        border: 1px solid #d7d7d7;
        background: #e7e9ee;

        font-weight: 400;
        font-size: 1rem;

        &::placeholder {
            color: #000;

        }

        & + input {
            margin-top: 1rem;
        }
    }

    button[type="text"] {
        width: 100%;
        padding: 0 1.5rem;
        height: 3rem;
        background: #3D7BD5;
        color: #fff;
        border-radius: 0.25rem;
        border: 0;
        font-size: 1rem;
        margin-top: 1.5rem;
        font-weight: 600;

        &:hover {
            filter: brightness(0.9);
        }
    }

`;

