import { StyledMain } from "../StyledComponents/StyledMain";
import { StyledTag } from "../StyledComponents/StyledTag";
import { StyledHeading } from "../StyledComponents/StyledHeading";
import { StyledImg } from "../StyledComponents/StyledImg";
import { sobre } from "../data/sobre"
import pictureLight from '../images/picture-light.png';
import pictureDark from '../images/picture-dark.png';
import PortfolioContext from '../context/PortfolioContext';
import { useContext } from 'react';


export default function Sobre() {
  const { theme } = useContext(PortfolioContext);
  return (
    <>
        <StyledMain minHeight='80vh'>
        { (theme.title === 'light') &&(
          <StyledImg src={pictureLight} alt="picture"/>
        )}
        { (theme.title === 'dark') &&(
          <StyledImg src={pictureDark} alt="picture"/>
        )}
          <StyledTag
            direction='column'
            basis='50%'
            maxWidth='80%'
          >
            <StyledHeading
              level={'2'}
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
    </>
  );
}
