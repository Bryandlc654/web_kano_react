const Gallery = () => {
  return (
    <>
    <section className="section section--subtitle galeria" id="galeria">
      <div className="container">
        <div className="background__container">
          <h3>GALERÍA</h3>
        </div>
      </div>
    </section>
    <article className="section section--page">
      <div className="container container__elements--section">
        <div className="container-image image__gallery">
          <img src="https://img.freepik.com/foto-gratis/sala-estar-pared-blanca-tiene-sofa-decoracion-representacion-3d_41470-3282.jpg?w=1060&t=st=1665939817~exp=1665940417~hmac=041e917a77422473a5bb4e2bb41a879f897b09cfe74026964d4f75767757a89d" alt="sofa" />
        </div>
        <div className="container-image image__gallery">
          <img src="https://img.freepik.com/foto-gratis/vacio-sofa-silla-decoracion-sala-estar_1339-7379.jpg?w=996&t=st=1665939899~exp=1665940499~hmac=92ccd4d2afb606c1cccf280cb7b0b302e71bbf3dadf52ec9725c28233be7c787" alt="silla" />
        </div>
        <div className="container-image image__gallery">
          <img src="https://img.freepik.com/foto-gratis/mujer-tiro-completo-comprobando-armario_23-2149190374.jpg?w=996&t=st=1665939700~exp=1665940300~hmac=dbe6388a8b6d59049cca01f34aa1979397b5c4b6aae827f0bdf7cf28a6ea7d3d" alt="Ropero" />
        </div>
        <div className="container-image image__gallery">
          <img src="https://img.freepik.com/foto-gratis/pequena-habitacion-hotel-paredes-blancas-ventana-panoramica_1262-12488.jpg?w=996&t=st=1665939224~exp=1665939824~hmac=3ef913e1332e0f232370a81c464dc06e9880325c1fefffec0b24a163f9ad731c" alt="cama" />
        </div>
        <div />
      </div>
    </article>
    </>
  );
};

export default Gallery;
