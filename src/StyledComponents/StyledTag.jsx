import styled from 'styled-components';

export const StyledTag = styled.div`
  border-radius: ${(props) => (props.borderRadius ? props.borderRadius : '4px')};
  flex-direction: ${(props) => (props.direction ? props.direction : '')};
  flex-basis: ${(props) => (props.basis ? props.basis : '')};
  justify-content: ${(props) => (props.justifyContent ? props.justifyContent : '')};
  align-items: ${(props) => (props.alignItems ? props.alignItems : '')};
  margin: ${(props) => (props.margin ? props.margin : '4px')};
  min-height: ${(props) => (props.height ? props.height : '40px')};
  width: ${(props) => (props.width ? props.width : '')};
  min-width: ${(props) => (props.minWidth ? props.minWidth : '')};
  max-width: ${(props) => (props.maxWidth ? props.maxWidth : '')};
  padding: ${(props) => (props.padding ? props.padding : '12px')};
  box-shadow: ${(props) => (props.shadow ? props.shadow : '1px 1px 2px #00000041')};
  text-align: ${(props) => (props.textAlign ? props.textAlign : 'center')};
  display: flex;
  background-color: ${(props) => (props.theme.colors.background)};
  color: ${(props) => (props.theme.colors.text)};
  
  h2{
    margin: 12px;
  }

  p{
    font-size: 1.2rem;
    margin: 4px;
    text-align: left;
  }

  a{
    text-decoration: none;
    color: #28292A;
  }
`;