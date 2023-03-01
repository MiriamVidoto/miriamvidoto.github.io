import styled from "styled-components";

export const StyledCardProject = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 35vw;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  border-radius: 10px;
  padding: 0.5rem;
  margin: 1rem;
  gap: 0.8rem;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease-in-out;

  a{
    text-decoration: none;
  }

  &:hover {
    transform: scale(1.02);
  }

  @media (max-width: 980px) {
    width: 80vw;
  }
`;
