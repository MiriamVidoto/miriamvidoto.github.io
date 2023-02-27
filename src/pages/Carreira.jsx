import { useContext } from 'react';
import PortfolioContext from '../context/PortfolioContext';
import { StyledMain } from "../StyledComponents/StyledMain";
import { StyledTag } from "../StyledComponents/StyledTag";
import { StyledHeading } from "../StyledComponents/StyledHeading";
import { StyledImg } from "../StyledComponents/StyledImg";
import pictureLight from '../images/picture-light.png';
import pictureDark from '../images/picture-dark.png';
import { carreira } from "../data/carreira"

export default function Carreira() {
  const { theme } = useContext(PortfolioContext);
  return (
    <>
      <StyledMain minHeight='80vh' direction1580='column'>
        { (theme.title === 'light') &&(
          <StyledImg
            src={pictureLight}
            alt="picture"
            width='35%'
            widthMobile='80%'
          />
        )}
        { (theme.title === 'dark') &&(
          <StyledImg
            src={pictureDark}
            alt="picture"
            width='35%'
            widthMobile='80%'
          />
        )}
        <StyledTag
          direction='column'
          basis='40%'
          maxWidth='90%'
          padding='24px'
        >
        <StyledHeading
            level={'2'}
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
    </>
  );
}
