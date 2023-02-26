import styled from 'styled-components';

export const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color:  ${props => props.theme.colors.secundary};
  color: white;
  height: 10vh;

  a{
    margin-left: 1vw;
    margin-right: 1vw;
    margin-top: 1vh;
  }

  span{
    font-size: 0.8rem;
    margin-bottom: 1vh;
    margin-top: 1vh;
  }
`;