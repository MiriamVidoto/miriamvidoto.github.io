import styled from "styled-components";

export const StyledMain = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${(props) => props.gap ? props.gap : ""};
  min-height: ${(props) => props.minHeight ? props.minHeight : ""};

  @media (max-width: 980px) {
    flex-direction: column;
    gap: 0;
  }
`;