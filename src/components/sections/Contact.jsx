const Hero = () => {
  return (
    <>
  <article className="section" id="contacto">
  <div className="container">
    <div className="card--email">
      <div className="card__title">
        <h3>RECIBE OFERTAS ECPECIALES</h3>
        <h6>REGISTRA TU CORREO ELECTRONICO</h6>
      </div>
      <div className="container container--inputs">
        <input type="email" placeholder="ejemplo@hotmail.com" className="input--email" />
        <input type="submit" defaultValue="ENVIAR" className="input-submit" />
      </div>
    </div>
  </div>
</article>
</>
  );
};

export default Hero;
