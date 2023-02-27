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
        <a href='https://github.com/MiriamVidoto' target="_blank" rel="noreferrer">
          <StyledImg src={github} alt='github' height='3vh'/>
        </a>
        <a href='https://www.instagram.com/miriam_vidoto/' target="_blank" rel="noreferrer">
          <StyledImg src={instagram} alt='instagram' height='3vh'/>
        </a>
        <a href='https://www.linkedin.com/in/miriam-vidoto/' target="_blank" rel="noreferrer">
          <StyledImg src={linkedin} alt='linkedin' height='3vh'/>
        </a>
        <a href='mailto:miriamvidoto.hdg@gmail.com' target="_blank" rel="noreferrer">
          <StyledImg src={email} alt='email' height='3vh'/>
        </a>
        <a href='https://wa.me/13988534388' target="_blank" rel="noreferrer">
          <StyledImg src={whatsapp} alt='whatsapp' height='3vh'/>
        </a>
      </StyledContainer>
        <span>© Desenvolvido por Miriam Vidoto - 2023 </span>
    </StyledFooter>
  );
}

export default Footer;
