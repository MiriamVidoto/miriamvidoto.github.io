import { StyledMain } from "../StyledComponents/StyledMain";
import { StyledTag } from "../StyledComponents/StyledTag";
import { StyledHeading } from "../StyledComponents/StyledHeading";

export default function Skills() {
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
              Em construção
            </StyledHeading>
          </StyledTag>
        </StyledMain>
  </>
  );  
}
