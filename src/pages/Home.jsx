import officeLight from '../images/office-light.gif';
import officeDark from '../images/office-dark.gif';
import code from '../images/code.svg';
import { StyledContainer } from '../StyledComponents/StyledContainer';
import { StyledMain } from '../StyledComponents/StyledMain';
import { StyledImg } from '../StyledComponents/StyledImg';
import PortfolioContext from '../context/PortfolioContext';
import { useContext } from 'react';


export default function Home() {
    const { theme } = useContext(PortfolioContext);
  return (
    <>
      <StyledMain gap='14rem' gap980='0'>
        <StyledContainer height='80vh'>
        { (theme.title === 'light') &&(
          <StyledImg src={officeLight} alt="office" height="100%" />
        )}
        { (theme.title === 'dark') &&(
          <StyledImg src={officeDark} alt="office" height="100%" />
        )} 
          </StyledContainer>
          <StyledContainer color={theme.colors.secundary} height='50vh'>
          <StyledImg src={code} alt="code" height="100%" />
        </StyledContainer>
      </StyledMain>
    </>
  );
}
