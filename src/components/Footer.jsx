import { Link } from "react-router-dom";
import { StyledFooter } from "../StyledComponents/StyledFooter";
import { StyledImg } from '../StyledComponents/StyledImg';
import github from "../images/github-icon.svg";
import instagram from "../images/instagram-icon.svg";
import linkedin from "../images/linkedin-icon.svg";
import email from "../images/email-icon.svg";
import whatsapp from "../images/whatsapp-icon.svg";
import { StyledContainer } from "../StyledComponents/StyledContainer";

function Footer() {
  return (
    <StyledFooter>
      <StyledContainer
        justify='space-around'
        justifyMedia='center'
      >
        <Link to=''><StyledImg src={github} alt='github' height='3vh'/></Link>
        <Link to=''><StyledImg src={instagram} alt='instagram' height='3vh'/></Link>
        <Link to=''><StyledImg src={linkedin} alt='linkedin' height='3vh'/></Link>
        <Link to=''><StyledImg src={email} alt='email' height='3vh'/></Link>
        <Link to=''><StyledImg src={whatsapp} alt='whatsapp' height='3vh'/></Link>
      </StyledContainer>
        <span>© Miriam - 2023 - Todos os direitos reservados</span>
    </StyledFooter>
  );
}

export default Footer;
