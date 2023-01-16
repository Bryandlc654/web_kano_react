import logo from "../../assets/img/LOGO.webp";

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <div className="container elements elements--header-nav">
          <a href="#" className="nav__logotext">
            <img src={logo} alt="" className="nav__logo" /> KANO
          </a>
          <button className="nav__icon nav__icon--menu" id="navIconMenu">
            <i className="bi bi-list" />
          </button>
          <ul className="menu menu--header">
            <li>
              <a href="#hero" className="menu__link">
                INICIO
              </a>
            </li>
            <li>
              <a href="#nosotros" className="menu__link">
                NOSOTROS
              </a>
            </li>
            <li>
              <a href="#galeria" className="menu__link">
                GALERÍA
              </a>
            </li>
            <li>
              <a href="#contacto" className="menu__link">
                CONTACTO
              </a>
            </li>
            <li className="nav__icon nav__icon--close" id="navIconClose">
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
