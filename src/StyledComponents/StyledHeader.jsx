import styled from 'styled-components';

export const StyledHeader = styled.header`
  background-color: ${props => props.theme.colors.secundary};
  color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 10vh;

  a{
    text-decoration: none;
  }

`;