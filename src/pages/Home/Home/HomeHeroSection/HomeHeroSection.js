import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div
      className="hero fondoHero"
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-8 col-md-10">
            <div className="hero-text position-relative paddingTopHero">
              <p>
                Nuestros tratamientos personalizados y tecnología avanzada te
                brindan resultados visibles y duraderos.
              </p>
              <div className="hero-btn">
                <Link
                  to="https://wa.me/+5217711979737"
                  className="primary_btn btn-icon ml-0"
                  target="_blank"
                >
                  Reserva tu cita ahora
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
