import styled from "styled-components";

export const StyledMain = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${(props) => props.direction ? props.direction : "row"};
  gap: ${(props) => props.gap ? props.gap : ""};
  min-height: ${(props) => props.minHeight ? props.minHeight : ""};

  @media (max-width: 980px) {
    flex-direction: column;
    gap: 0;
  }

    @media (max-width: 1580px) {
    flex-direction: ${(props) => props.direction1580 ? props.direction1580 : ""};
  }
`;