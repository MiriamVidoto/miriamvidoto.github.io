import CardSkill from "../components/CardSkill";
import { StyledMain } from "../StyledComponents/StyledMain";
import { skills } from "../data/skills";
import { StyledContainer } from "../StyledComponents/StyledContainer";
import { StyledTag } from "../StyledComponents/StyledTag";
import { useContext } from "react";
import { StyledHeading } from "../StyledComponents/StyledHeading";
import PortfolioContext from "../context/PortfolioContext";
import { IoIosCloseCircleOutline } from "react-icons/io";

export default function Skills() {
  const { skillSelected, setSkillSelected } = useContext(PortfolioContext);
  return (
  <>
  <StyledMain minHeight='80vh' direction='column'>
      {
        skillSelected && (
        <StyledTag
          width='57vw'
          direction='column'
          width980='80vw'
          position='fixed'
          zIndex='1'
          top='10vh'
        >
          <button
            type='button'
            onClick={() => setSkillSelected(null)}
          >
      <IoIosCloseCircleOutline  />
    </button>
          <StyledHeading level='2'>{skillSelected.name}</StyledHeading>
          <p>{skillSelected.description}</p>
          <a href={skillSelected.url} target='_blank' rel='noreferrer'>VER DOCUMENTAÇÃO</a>
        </StyledTag>)
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
