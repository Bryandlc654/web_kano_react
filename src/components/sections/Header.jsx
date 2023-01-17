import React, { useState } from 'react';
import logo from "../../assets/img/LOGO.webp";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  }

  const closeNav = () => {
    setNavOpen(false);
  }

  return (
    <header className={`header ${window.scrollY > 0 ? 'header--scroll' : ''}`}>
      <nav className={`nav ${window.scrollY > 0 ? 'nav--scroll' : ''} ${navOpen ? 'nav--open' : ''}`}>
        <div className="container elements elements--header-nav">
          <a href="#" className="nav__logotext">
            <img src={logo} alt="" className="nav__logo" /> KANO
          </a>
          <button className="nav__icon nav__icon--menu" id="navIconMenu" onClick={toggleNav}>
            <i className="bi bi-list" />
          </button>
          <ul className="menu menu--header">
            <li>
              <a href="#hero" className="menu__link" onClick={closeNav}>
                INICIO
              </a>
            </li>
            <li>
              <a href="#nosotros" className="menu__link" onClick={closeNav}>
                NOSOTROS
              </a>
            </li>
            <li>
              <a href="#galeria" className="menu__link" onClick={closeNav}>
                GALERÍA
              </a>
            </li>
            <li>
              <a href="#contacto" className="menu__link" onClick={closeNav}>
                CONTACTO
              </a>
            </li>
            <li className="nav__icon nav__icon--close" id="navIconClose" onClick={closeNav}>
              <i className="bi bi-x-circle" />
            </li>
          </ul>
          <a href="tel:+51948521905" className="phone">
            <i className="bi bi-telephone-fill" />
            948521905
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;