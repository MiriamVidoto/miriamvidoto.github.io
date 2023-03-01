import { StyledTagLinkProject } from "../StyledComponents/StyledTagLinkProject";
import { StyledImg } from "../StyledComponents/StyledImg";
import githubIcon from '../images/projetos/icons-card/gh.svg';
import webIcon from '../images/projetos/icons-card/web.svg';

export default function TagLinkProject({ github, url }) {
  return ( 
    <StyledTagLinkProject>
      <a href={github} target='_blank' rel="noreferrer">
        <StyledImg src={githubIcon} alt='github' height='4vh'/>
      </a>
      <a href={url} target='_blank' rel="noreferrer">
        <StyledImg src={webIcon} alt='web' height='4vh'/>
      </a>
    </StyledTagLinkProject>
  )
}