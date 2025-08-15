import React from "react";
import { Link } from "react-router-dom";

const HomeFooter = () => {
  return (
    <>
      <footer className="footer-modern">
        <div className="container">
          <div className="row align-items-center py-5">
            <div className="col-md-4 text-center text-md-left mb-4 mb-md-0">
              <img
                src="img/logo/footer-logo.png"
                alt="Logo"
                className="footer-logo mb-2"
              />
              <p className="footer-desc">
                Clínica estética en Pachuca. Bienestar y belleza con tecnología
                avanzada.
              </p>
            </div>
            <div className="col-md-4 text-center mb-4 mb-md-0">
              <h5>Contacto</h5>
              <p>
                <i className="fas fa-phone"></i> +52 1 771 197 9737
              </p>
              <p>
                <i className="far fa-envelope"></i> womeds@info.com
              </p>
              <p>
                <i className="far fa-flag"></i> Camino Real de la Plata #200,
                Interior 4, Pachuca
              </p>
            </div>
            <div className="col-md-4 text-center text-md-right">
              <h5>Síguenos</h5>
              <a href="#" className="footer-social mx-2">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="footer-social mx-2">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="footer-social mx-2">
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col-12 text-center mt-3">
              <small>
                Todos los Derechos Reservados {new Date().getFullYear()} Womeds
              </small>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default HomeFooter;
