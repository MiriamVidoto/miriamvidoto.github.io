import { StyledMain } from "../StyledComponents/StyledMain";
import { StyledTag } from "../StyledComponents/StyledTag";
import { StyledHeading } from "../StyledComponents/StyledHeading";
import { carreira } from "../data/carreira"

export default function Carreira() {
  return (
    <>
      <StyledMain minHeight='80vh'>
          <StyledTag
            direction='column'
            basis='60%'
            maxWidth='90%'
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
