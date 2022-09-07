import { NavLink } from 'react-router-dom';
import './styles/Header.css';

function Header() {
  return (
    <header>
      <h1>{'< Miriam Vidoto />'}</h1>
      <nav className="menu">
        <ul>
          <li>
            <NavLink to="/" activeClassName="selected" exact>Quem Sou eu</NavLink>
          </li>
          <li>
            <NavLink to="/skills" activeClassName="selected">Skills</NavLink>
          </li>
          <li>
            <NavLink to="/carreira" activeClassName="selected">Sobre Carreira</NavLink>
          </li>
          <li>
            <NavLink to="/projetos" activeClassName="selected">Projetos</NavLink>
          </li>
          <li>
            <NavLink to="/contato" activeClassName="selected">Vamos nos conectar?</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
