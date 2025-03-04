// components/Services.jsx
import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <div className="services-container">
      <h2>Servicios Exclusivos</h2>
      <p>Elige entre una variedad de estilos y tratamientos para que tus uñas luzcan espectaculares.</p>
      <div className="services">
        <div className="service-card">
          <img src="https://clicandpost.com/wp-content/uploads/2021/11/front-view-woman-getting-her-manicure-done-at-the-salon-scaled-1.jpg" alt="Manicura" />
          <h3>Manicura Clásica</h3>
          <p>Un tratamiento ideal para el cuidado y embellecimiento de tus uñas.</p>
        </div>
        <div className="service-card">
          <img src="https://st1.uvnimg.com/3c/24/0645c3a6488d81bd71bda62362d2/disenos-de-unas-para-halloween-2024.jpg" alt="Diseños" />
          <h3>Diseños Personalizados</h3>
          <p>Crea un estilo único con diseños modernos y personalizados.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
