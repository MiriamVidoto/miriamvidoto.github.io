import { StyledTag } from "../StyledComponents/StyledTag";
import { useContext } from "react";
import { StyledHeading } from "../StyledComponents/StyledHeading";
import PortfolioContext from "../context/PortfolioContext";
import { IoIosCloseCircleOutline } from "react-icons/io";

export default function SkillDescription() {
  const { skillSelected, setSkillSelected } = useContext(PortfolioContext);
  
  return (
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
    </StyledTag>
  )
};