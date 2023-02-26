import styled from "styled-components"

export const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${(props) => props.justify ? props.justify : "center"};
  height: ${(props) => props.height ? props.height : ""};
  width: ${(props) => props.width ? props.width : ""};
  max-width: ${(props) => props.maxWidth ? props.maxWidth : ""};
  min-width: ${(props) => props.minWidth ? props.minWidth : ""};

  @media (max-width: 980px) {
    width: 100%;
    background-color: ${(props) => props.color ? props.color : "tranparent"};
    justify-content: ${(props) => props.justifyMedia ? props.justifyMedia : "center"};
  }
`;
