import React from "react";
import Mapa from './Mapa';

const ContactArea = () => {
  return (
    <>
      <section
        className="contact-area pt-120 pb-90"
        data-background="assets/img/bg/bg-map.png"
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-4">
              <div className="contact text-center mb-30">
                <i className="fas fa-envelope"></i>
                <h3>Womeds Email</h3>
                <p>contacto@clinicawomeds.com</p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4">
              <div className="contact text-center mb-30">
                <i className="fas fa-map-marker-alt"></i>
                <h3>Visitanos en</h3>
                <p>
                  Camino Real de la Plata #200, Interior 4, Zona Plateada,
                  Pachuca de Soto, Hidalgo, México
                </p>
              </div>
            </div>
            <div className="col-xl-4  col-lg-4 col-md-4 ">
              <div className="contact text-center mb-30">
                <i className="fas fa-phone"></i>
                <h3>Llama al</h3>
                <p>+52 1 771 197 9737</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="form-area pt-120 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12">
              <h2 className="text-center mb-4">Contáctanos</h2>
              <form>
                <div className="form-group">
                  <label>
                    Nombre <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="nombre"
                    placeholder="Ingrese su nombre"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>
                    Correo <span className="required">*</span>
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="correo"
                    placeholder="Ingrese su correo electrónico"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>
                    Teléfono <span className="required">*</span>
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    id="telefono"
                    placeholder="Ingrese su número de teléfono"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Servicio de Interés</label>
                  <select className="form-control" id="servicio">
                    <option value="">Seleccione un servicio</option>
                    <option value="servicio1">Servicio 1</option>
                    <option value="servicio2">Servicio 2</option>
                    <option value="servicio3">Servicio 3</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>
                    Motivo de contacto <span className="required">*</span>
                  </label>
                  <select className="form-control" id="motivo" required>
                    <option value="">Seleccione un motivo</option>
                    <option value="agendarCita">Agendar cita</option>
                    <option value="saberMas">
                      Saber más de los beneficios
                    </option>
                  </select>
                </div>
                <button type="submit" className="btn btn-primary">
                  Enviar
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Mapa />
    </>
  );
};

export default ContactArea;
