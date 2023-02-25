import styled from "styled-components";

export const StyledMain = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 14rem;

  @media (max-width: 980px) {
    flex-direction: column;
    gap: 0;
  }
`;