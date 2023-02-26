import { Link } from 'react-router-dom';
import { StyledNav } from '../StyledComponents/StyledNav';
import { IoMdMenu } from "react-icons/io";
import { IoIosCloseCircleOutline } from "react-icons/io";

export default function Navbar() {
  return (
    <>
    <StyledNav>
    <button>
      <IoMdMenu />
    </button>
    <button>
      <IoIosCloseCircleOutline  />
    </button>
      <Link to="/sobre">Sobre</Link>
      <Link to="/skills">Skills</Link>
      <Link to="/carreira">Carreira</Link>
      <Link to="/projetos">Projetos</Link>
    </StyledNav>
    </>
  );
}