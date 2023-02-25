import Footer from '../components/Footer';
import Header from '../components/Header';
import office from '../images/office-light.gif';
import code from '../images/code.svg';
import { StyledContainer } from '../StyledComponents/StyledContainer';
import { StyledMain } from '../StyledComponents/StyledMain';
import { StyledImg } from '../StyledComponents/StyledImg';


export default function Home() {
  return (
    <>
      <Header />
      <StyledMain>
        <StyledContainer height='85vh'>
          <StyledImg src={office} alt="office"/>
          </StyledContainer>
          <StyledContainer color='#130233' height='50vh'>
          <StyledImg src={code} alt="code"/>
        </StyledContainer>
      </StyledMain>
      <Footer />
    </>
  );
}
