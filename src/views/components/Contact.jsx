import React from 'react';
import { LandingController } from '../../controllers/landingController';
import './Contact.css';

const Contact = () => {
  const data = LandingController.getData();
  
  return (
    <section className="contact" id="contato">
      <div className="contact-container">
        <div className="contact-content">
          <h2 className="contact-title">
            Vamos transformar suas ideias
            <br />
            <span className="gradient-text">em vídeos virais?</span>
          </h2>
          
          <p className="contact-description">
            Entre em contato agora e receba um orçamento personalizado para o seu projeto. 
            Respondo em poucos minutos! 🚀
          </p>

          <button 
            className="contact-button"
            onClick={LandingController.handleContactClick}
          >
            <span className="button-text">Entre em Contato</span>
            <span className="button-arrow">→</span>
          </button>
        </div>

        <div className="contact-decoration">
          <div className="decoration-circle circle-1"></div>
          <div className="decoration-circle circle-2"></div>
          <div className="decoration-circle circle-3"></div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
