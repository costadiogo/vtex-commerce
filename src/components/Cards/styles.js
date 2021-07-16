import styled from 'styled-components';

export const Container = styled.section`

    width: 600px;
    height: 600px;
    background: #B3B6B7;
    border-radius: 8px;
    display: flex;
    align-items: flex-start;
    margin: 15px auto;

    flex-direction: column;

    p {
        display: flex;
        align-items: center;
        text-align: center;
        justify-content: center;
        font-size: 16px;
        margin-left: 25px;
        padding: 30px;
        width: 70%;
    }

    button {
        align-items: center;
        text-align: center;
        justify-content: center;
        font-size: 16px;
        color: #fff;
        font-weight: bold;
        padding: 8px 10px;
        border-radius: 4px;
        text-decoration: none;
        align-self: center;
        background: #3D7BD5;
        border: 0;
    
        &:hover {
            color: #000;
            background: #F15171 ;
            box-shadow: 0 0 10px #F15171, 0 0 20px #F15171, 0 0 30px #F15171;
        }
    }
`;

export const Content = styled.div`

    border-radius: 8px;
    border: 1px solid #C3C3C3;
    box-shadow: 0 2px 7px 0 rgba(0, 0, 0, 0.15);

    display: flex;
    padding: 10px;
    width: 500px;
    margin: 10px auto;
    background: #ECF0F1;

    img {
        max-width: 100px;
        margin-right: 20px;
        border-radius: 3px;
    }

    h1 {
        font-size: 15px;
    }

    span {
        font-size: 16px;
        color: #3D7BD5;
        font-weight: bold;
    }

    footer {
        display: flex;
        align-items: center;
    }

    footer span {
        color: #797D7F;
        margin-right: 10px;
    }

    footer div {
        margin-left: auto;
        margin-right: 10px;
    }

    footer a {
    
        color: #fff;
        font-weight: bold;
        padding: 8px 10px;
        border-radius: 4px;
        text-decoration: none;
        background: #3D7BD5;
    
        &:hover {
            color: #000;
            background: #F15171 ;
            box-shadow: 0 0 10px #F15171, 0 0 20px #F15171, 0 0 30px #F15171;
        }
    }
`;