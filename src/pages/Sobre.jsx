import Header from "../components/Header";
import Footer from '../components/Footer';
import { StyledMain } from "../StyledComponents/StyledMain";
import { StyledTag } from "../StyledComponents/StyledTag";
import { StyledHeading } from "../StyledComponents/StyledHeading";
import { StyledImg } from "../StyledComponents/StyledImg";
import { sobre } from "../data/sobre"
import picture from '../images/mih-escuro.png';

export default function Sobre() {
  return (
    <>
      <Header />
        <StyledMain minHeight='85vh'>
          <StyledImg src={picture}/>
          <StyledTag
            direction='column'
            basis='50%'
            maxWidth='80%'
          >
            <StyledHeading
              level={'2'}
              color={'#130233'}
              size={'1.8rem'}
            >
              {sobre.title}
            </StyledHeading>
            {
              sobre.text.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))
            }
          </StyledTag>
        </StyledMain>
      <Footer />
    </>
  );
}
