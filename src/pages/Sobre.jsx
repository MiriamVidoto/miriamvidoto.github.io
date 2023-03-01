import { StyledMain } from "../StyledComponents/StyledMain";
import { StyledImg } from "../StyledComponents/StyledImg";
import aboutLight from '../images/about-light.svg';
import aboutDark from '../images/about-dark.svg';
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
          margin="2rem"
          borderRadius="10px"
          width="35vw"
          widthMobile="70vw"
        />
      )}
      </StyledMain>
    </>
  );
}
