import { StyledMain } from "../StyledComponents/StyledMain";
import { StyledImg } from "../StyledComponents/StyledImg";
import aboutLight from '../images/about-light.jpg';
import aboutDark from '../images/about-dark.jpg';
import PortfolioContext from '../context/PortfolioContext';
import { useContext } from 'react';


export default function Sobre() {
  const { theme } = useContext(PortfolioContext);
  return (
    <>
      <StyledMain minHeight='80vh'>
      { (theme.title === 'light') &&(
        <StyledImg
          src={aboutLight}
          alt="picture"
          margin="2rem"
          borderRadius="10px"
          width="35vw"
          widthMobile="70vw"
        />
      )}
      { (theme.title === 'dark') &&(
        <StyledImg
          src={aboutDark}
          alt="picture"
          height="60vh"
          margin="2rem"
          borderRadius="10px"
        />
      )}
      </StyledMain>
    </>
  );
}
