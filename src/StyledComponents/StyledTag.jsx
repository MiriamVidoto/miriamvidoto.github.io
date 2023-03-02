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
  position: ${(props) => (props.position ? props.position : '')};
  top: ${(props) => (props.top ? props.top : '')};
  z-index: ${(props) => (props.zIndex ? props.zIndex : '')};
  transition: all 0.5s ease-in-out;
  opacity: ${(props) => (props.opacity ? props.opacity : '')};


  
  
  h2{
    margin: 0.3rem;
    font-size:${(props) => (props.fontSize ? props.fontSize : '2rem')};
  }

  p{
    font-size: ${(props) => (props.fontSize ? props.fontSize : '1.2rem')};
    margin: 1rem;
    text-align: left;
    text-indent: 1rem;
  }

  a{
    text-decoration: none;
    color: ${(props) => (props.theme.colors.text)};
    text-align: right;
    font-size: 0.7rem;
  }

    button{
    background-color: transparent;
    color: ${(props) => (props.theme.colors.text)};
    border: none;
    font-size: 1.5rem;
    text-align: center;
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
  }

  button:hover{
    cursor: pointer;
  }

    @media (max-width: 980px) {
    width: ${(props) => props.width980 ? props.width980 : "100%"};

      p{
        font-size: 1rem;
      }
    }
`;