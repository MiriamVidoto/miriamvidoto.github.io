import { Link } from 'react-router-dom';
import { StyledNav } from '../StyledComponents/StyledNav';
import { IoMdMenu } from "react-icons/io";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    <StyledNav>
    <button>
      <IoMdMenu />
    </button>
    {isOpen && (
    <button>
      <IoIosCloseCircleOutline  />
    </button>
    )}
      <Link to="/sobre">Sobre</Link>
      <Link to="/skills">Skills</Link>
      <Link to="/carreira">Carreira</Link>
      <Link to="/projetos">Projetos</Link>
    </StyledNav>
    </>
  );
}