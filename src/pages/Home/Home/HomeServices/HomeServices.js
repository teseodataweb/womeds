import React from 'react';
import HomeSIngleService from '../../../../components/HomeSIngleService/HomeSIngleService';

const HomeServices = () => {
   return (
      <>
         <section className="servcies-area gray-bg pt-115 pb-90">
            <div className="container">
               <div className="row">
                  <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
                     <div className="section-title text-center pos-rel mb-75">
                        <div className="section-icon">
                           <img className="section-back-icon" src="img/section/section-back-icon.png" alt=""/>
                        </div>
                        <div className="section-text pos-rel home_ser_title">
                           <h2>Nuestros Servicios</h2>
                           <h5>Tratamientos Estéticos Avanzados para tu Bienestar y Belleza</h5>
                        </div>
                        <div className="section-line pos-rel">
                           <img src="img/shape/section-title-line.png" alt=""/>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="row">
                  <HomeSIngleService icon="fa-solid fa-bolt-lightning" title="Depilación Láser" descripcion="Olvídate del vello no deseado con nuestros tratamientos de depilación láser. Eficaz, seguro y duradero, ideal para todas las áreas del cuerpo." />
                  <HomeSIngleService icon="fa-solid fa-spa" title="Masajes relajantes y descontracturantes" descripcion="Relájate y revitalízate con nuestros masajes relajantes y descontracturantes. Ideales para aliviar el estrés y mejorar tu bienestar físico y mental."/>
                  <HomeSIngleService icon="fa-solid fa-eraser" title="Eliminación de Tatuajes" descripcion="Utilizando la tecnología Alma láser, ofrecemos eliminación de tatuajes de manera efectiva y segura, devolviéndote la piel natural que deseas."/>
                  <HomeSIngleService icon="fa-solid fa-face-smile-beam" title="Tratamientos Faciales Personalizados" descripcion="Descubre nuestros tratamientos faciales personalizados que incluyen hidratación, limpieza profunda y rejuvenecimiento, adaptados a las necesidades específicas de tu piel."/>
                  <HomeSIngleService icon="fa-solid fa-syringe" title="Procedimientos con Ácido Hialurónico" descripcion="Realza tu belleza con nuestros procedimientos de perfilado nasal y rellenos con ácido hialurónico, diseñados para ofrecerte un aspecto fresco y rejuvenecido."/>
               </div>
            </div>
         </section>
      </>
   );
};

export default HomeServices;