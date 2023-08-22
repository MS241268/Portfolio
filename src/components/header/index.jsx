import { NavLink } from 'react-router-dom';

import './index.css';
// import logo from '../../assets/logo_kasa.svg'

function Header() {
  return (
    <header>
      {/* <NavLink
			 to="/" className="logo_link_container">
			<img src={logo} alt="Logo Kasa"   />
			</NavLink> */}
      <nav>
        <ul>
          {/*destructuring synthax : '{isActive}' : permet de connaître la valeur de la propriété 'isActive' ('true' ou 'false') */}
          {/* 'activePage' : mise en forme CSS du lien de la page active dans le dossier 'header/css' */}
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? 'activePage' : null)}
              to="/"
            >
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? 'activePage' : null)}
              to="/cv"
            >
              Curriculum Vitae
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? 'activePage' : null)}
              to="/diplomes"
            >
              Diplômes
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
