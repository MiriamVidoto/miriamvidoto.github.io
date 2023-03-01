import styled from "styled-components";

export const StyledCardSkill = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;
  padding: 1rem;
  margin: 1rem;
  border-radius: 1rem;
  border: none;
  background-color:${({ theme }) => theme.colors.background};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease-in-out;
  width: 8rem;
  height: 8rem;
  
  &:hover {
    transform: scale(1.05);
    cursor: pointer;
  }
`;
