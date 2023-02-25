import styled from "styled-components"

export const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${(props) => props.height ? props.height : ""};

  @media (max-width: 980px) {
    width: 100%;
    background-color: ${(props) => props.color ? props.color : "tranparent"};
  }
`;
