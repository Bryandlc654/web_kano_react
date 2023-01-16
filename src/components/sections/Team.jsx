const Team = () => {
  return (
    <>
  <section className="section section--subtitle equipo">
    <div className="container">
      <div className="background__container">
        <h3>EQUIPO</h3>
      </div>
    </div>
  </section>
  <article className="section section--page">
    <div className="container container__elements--section">
      <div className="container-image image__gallery card">
        <img src="https://img.freepik.com/foto-gratis/apuesto-hombre-empresario-sonriendo-alegre_176420-17877.jpg?w=2000" alt="Jhon" />
        <div className="container--info">
          <div className="container--text-card">
            <h4>JHON MARCOS</h4>
            <h6>DISEÑO DE INTERIORES</h6>
          </div>
          <div className="button--phone">
            <a href="tel:948521905"><i className="bi bi-telephone-fill" /></a>
          </div>
        </div>
      </div>
      <div className="container-image image__gallery card">
        <img src="https://img.freepik.com/foto-gratis/guapo-exitoso-hombre-negocios-sonriente_176420-19024.jpg?w=2000" alt="Francis" />
        <div className="container--info">
          <div className="container--text-card">
            <h4>FRANCIS DIAZ</h4>
            <h6>DISEÑO DE INTERIORES</h6>
          </div>
          <div className="button--phone">
            <a href="tel:948521905"><i className="bi bi-telephone-fill" /></a>
          </div>
        </div>
      </div>
    </div>
  </article>
</>
  );
};

export default Team;
