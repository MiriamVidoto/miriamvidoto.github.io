import Header from "../components/Header";
import Footer from '../components/Footer';
import { StyledMain } from "../StyledComponents/StyledMain";
import { StyledTag } from "../StyledComponents/StyledTag";
import { StyledHeading } from "../StyledComponents/StyledHeading";
import { carreira } from "../data/carreira"

export default function Carreira() {
  return (
    <>
      <Header />
      <StyledMain minHeight='85vh'>
          <StyledTag
            direction='column'
            basis='60%'
            maxWidth='90%'
          >
            <StyledHeading
              level={'2'}
              color={'#130233'}
              size={'2.2rem'}
            >
              {carreira.title}
            </StyledHeading>
            {
              carreira.text.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))
            }
          </StyledTag>
        </StyledMain>
      <Footer />
    </>
  );
}
