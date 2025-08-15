import React from 'react';

const Mapa = () => {
  return (
    <section className="map-area pt-120 pb-90">
      <div className="container">
        <div className="row">
          <div className="col-xl-12 col-lg-12 col-md-12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3746.8766778558643!2d-98.77585612613962!3d20.09744138132892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1a0b5c9ec69cf%3A0x7900775cb1fe2ad5!2sWOMEDS!5e0!3m2!1ses!2smx!4v1754947396612!5m2!1ses!2smx"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mapa;