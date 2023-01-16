import logo from "../../assets/img/LOGO.webp";


const Footer= () => {
  return (
    <>
      <footer className="footer">
        <div className="box-container">
          <div className="box">
            <img src={logo} alt="logo" className="nav__logo" />
            <h3>KANO</h3>
            <p>SIGUENOS EN NUESTRAS REDES SOCIALES</p>
            <div className="share">
              <a href="#" target="_blank">
                <i className="bi bi-facebook" />
              </a>
              <a href="#" target="_blank">
                <i className="bi bi-instagram" />
              </a>
              <a href="#" target="_blank">
                <i className="bi bi-whatsapp" />
              </a>
            </div>
          </div>
          <div className="box">
            <h3>CONTACTO</h3>
            <a href="tel:+51948521905" className="links">
              <i className="bi bi-telephone-fill" />
              +51 948521905{" "}
            </a>
            <a href="mailto:bdelacruz654@gmail.com" className="links">
              {" "}
              <i className="bi bi-envelope-fill" /> BDELACRUZ654@gmail.com{" "}
            </a>
            <a href className="links">
              <i className="bi bi-geo-alt-fill" />
              AV. EMANCIPACION 251, SUNAMPE{" "}
            </a>
          </div>
          <div className="box">
            <h3>IR A</h3>
            <a href="#hero" className="links">
              <i className="bi bi-caret-right-fill" />
              INICIO{" "}
            </a>
            <a href="#nosotros" className="links">
              <i className="bi bi-caret-right-fill" />
              NOSOTROS{" "}
            </a>
            <a href="#galeria" className="links">
              <i className="bi bi-caret-right-fill" />
              GALERIA{" "}
            </a>
            <a href="#contacto" className="links">
              <i className="bi bi-caret-right-fill" />
              CONTACTO{" "}
            </a>
          </div>
          <div className="box">
            <h3>REGISTRATE</h3>
            <p>INGRESA AQUI TU CORREO ELECTRONICO</p>
            <input
              type="email"
              placeholder="ejemplo@hotmail.com"
              className="input"
            />
            <input type="submit" defaultValue="ENVIAR" className="btn" />
          </div>
        </div>
        <div className="credit">
          {" "}
          DESARROLLADO POR <span> BRYAN DE LA CRUZ </span> |{" "}
          <a href="#" target="_blank">
            CONTACTAME
          </a>{" "}
        </div>
      </footer>
    </>
  );
};

export default Footer;
