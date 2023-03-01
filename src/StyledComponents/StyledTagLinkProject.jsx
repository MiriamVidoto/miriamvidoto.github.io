import styled from "styled-components";

export const StyledTagLinkProject = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  width: 100%;

  a {
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
    transform: scale(1.1);
  }
`;