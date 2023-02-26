import styled from 'styled-components';

export const StyledNav = styled.nav`
  background-color: ${props => props.theme.colors.secundary};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex-basis:30%;

  a{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-basis: 25%;
    color: #EFEFED;
    text-decoration: none;
    padding: 8px;
    height: 100%;
  }
  
  a:hover{
    background-color: ${props => props.theme.colors.primary};
  }

  button{
    background-color: transparent;
    color: white;
    border: none;
    font-size: 2rem;
    text-align: center;
  }

  @media (max-width: 980px) {
    flex-basis: 10%;
    flex-direction: column;
    /* margin-top: 40vw; */
    /* width: 100vw; */
    /* position: fixed; */

    a{
      display: none;
      width: 100%;
      height: 100%;
      justify-content: flex-start;
    }
  }

  @media (min-width: 980px) {
    button{
      display: none;
    }

  }
`;