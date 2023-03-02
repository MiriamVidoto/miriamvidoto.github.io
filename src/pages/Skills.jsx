import CardSkill from "../components/CardSkill";
import { StyledMain } from "../StyledComponents/StyledMain";
import { skills } from "../data/skills";
import { StyledContainer } from "../StyledComponents/StyledContainer";
import { useContext } from "react";
import PortfolioContext from "../context/PortfolioContext";
import SkillDescription from "../components/SkillDescription";

export default function Skills() {
  const { skillSelected } = useContext(PortfolioContext);
  return (
  <>
  <StyledMain minHeight='80vh' direction='column'>
      {
        skillSelected && <SkillDescription />
      }
    <StyledContainer wrap='wrap' width='60vw' width980='80vw'>
      {
        skills.map((skill, index) => <CardSkill key={ index } skill={ skill }/>)
      }
    </StyledContainer>         
  </StyledMain>
  </>
  );  
}
