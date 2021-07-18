import styled from 'styled-components';


export const Nav = styled.nav`

    background: #ECF0F1;
    max-width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    @media(max-width: 800px) {
    flex-direction: column;
    position: relative;
  }

    img {
    width: 100px;
    height: 100px;
    margin-left: 5px;
  }

  a {
    color: black;
    margin: 5px;
    padding: 10px 30px;
    align-items: space-around;
    font-weight: bold;
    border-radius: 4px;
    text-decoration: none;
  }
  a:hover {
    color: #000;
    background: #F15171 ;
    box-shadow: 0 0 10px #F15171, 0 0 20px #F15171, 0 0 40px #F15171 ;
  }
`;