import React from 'react';
import { LandingController } from '../../controllers/landingController';
import './Services.css';

const Services = () => {
  const data = LandingController.getData();
  
  return (
    <section className="services" id="servicos">
      <div className="services-container">
        <div className="section-header">
          <span className="section-label">Serviços</span>
          <h2 className="section-title">
            Versátil & Eficiente
            <br />
            <span className="gradient-text">Edições para todas as plataformas</span>
          </h2>
          <p className="section-description">
            Edições profissionais que se adaptam ao seu estilo e plataforma. 
            Do engraçado ao épico, entrego qualidade.
          </p>
        </div>

        <div className="services-grid">
          {data.services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <div className="service-stats">{service.stats}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
