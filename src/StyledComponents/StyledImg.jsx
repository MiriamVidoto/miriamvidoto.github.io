import styled from 'styled-components';

export const StyledImg = styled.img`
  margin: ${(props) => (props.margin ? props.margin : '')};
  border-radius: ${(props) => (props.borderRadius ? props.borderRadius : '')};
  height: ${(props) => (props.height ? props.height : '')};
  width: ${(props) => (props.width ? props.width : '')};
  max-width: ${(props) => (props.maxWidth ? props.maxWidth : '')};

  @media (max-width: 980px) {
    height: ${(props) => (props.heightMobile ? props.heightMobile : '')};
    width: ${(props) => (props.width980 ? props.width980 : '')};
  }

  @media (max-width: 768px) {
    height: ${(props) => (props.heightMobile ? props.heightMobile : '')};
    width: ${(props) => (props.widthMobile ? props.widthMobile : '')};
  }
`;
