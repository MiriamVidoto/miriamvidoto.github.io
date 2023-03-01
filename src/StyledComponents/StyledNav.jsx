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

  button:hover{
    cursor: pointer;
  }

  @media (max-width: 980px) {
    flex-direction: column;
    align-items: ${props => props.isOpen ? 'flex-end' : ''};
    flex-basis: ${props => props.isOpen ? '' : '10%'};
    width: ${props => props.isOpen ? '100vw' : '0'};
    height: ${props => props.isOpen ? '50vh' : '0'};
    position: ${props => props.isOpen ? 'absolute' : ''};
    top: ${props => props.isOpen ? '0' : ''};
    z-index: ${props => props.isOpen ? '1' : ''};

    a{
      width: 100%;
      background-color: ${props => props.theme.colors.secundary};
      display: ${props => props.isOpen ? 'flex' : 'none'};
    }

    button{
      margin: ${props => props.isOpen ? '1rem' : '0'};
    } 
  }

  @media (min-width: 980px) {
    button{
      display: none;
    }

  }
`;