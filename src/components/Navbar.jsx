import { Link } from 'react-router-dom';
import { StyledNav } from '../StyledComponents/StyledNav';
import { IoMdMenu } from "react-icons/io";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  
  const handleMenu = () => setIsOpen(false);

  return (
    <>
    <StyledNav isOpen={isOpen}>
    {!isOpen && (
      <button
      type='button'
      onClick={() => setIsOpen(!isOpen)}>
        <IoMdMenu />
    </button>
    )}
    {isOpen && (
    <button
      type='button'
      onClick={() => setIsOpen(!isOpen)}
    >
      <IoIosCloseCircleOutline  />
    </button>
    )}
      <Link to="/sobre" onClick={handleMenu}>Sobre</Link>
      <Link to="/skills" onClick={handleMenu}>Skills</Link>
      <Link to="/carreira" onClick={handleMenu}>Carreira</Link>
      <Link to="/projetos" onClick={handleMenu}>Projetos</Link>
    </StyledNav>
    </>
  );
}