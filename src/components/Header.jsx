import { StyledHeader } from '../StyledComponents/StyledHeader';
import { StyledHeading } from '../StyledComponents/StyledHeading';
import Navbar from './Navbar';


export default function Header() {
  return (
    <StyledHeader>
      <StyledHeading
      level={1}
      color="#EFEFED"
      size="1.6rem"
      >
        {'< Miriam Vidoto />'}
      </StyledHeading>
      <Navbar />
    </StyledHeader>
  );
}
