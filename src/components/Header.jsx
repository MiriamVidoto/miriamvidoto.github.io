import { Link } from 'react-router-dom';
import { StyledHeader } from '../StyledComponents/StyledHeader';
import { StyledHeading } from '../StyledComponents/StyledHeading';
import Navbar from './Navbar';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { useContext } from 'react';
import PortfolioContext from '../context/PortfolioContext';

export default function Header() {
  const { colors } = useContext(ThemeContext);
  const { theme, toggleTheme} = useContext(PortfolioContext);

  return (
    <StyledHeader>
      <Link to='/'>
        <StyledHeading
        level={1}
        color="#EFEFED"
        size="1.6rem"
        >
          {'< Miriam Vidoto />'}
        </StyledHeading>
      </Link>
      <Switch
        onChange={toggleTheme}
        checked={theme.title === 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={30}
        handleDiameter={18}
        offColor="#EFEFED"
        onColor={colors.primary}

      />
      <Navbar />
    </StyledHeader>
  );
}
