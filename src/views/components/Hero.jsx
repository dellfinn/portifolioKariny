import React from 'react';
import { LandingController } from '../../controllers/landingController';
import './Hero.css';

const Hero = () => {
  const data = LandingController.getData();
  
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-icon">✨</span>
            <span>Edições Profissionais</span>
          </div>
          
          <h1 className="hero-title">
            {data.hero.title}
            <br />
            <span className="gradient-text">{data.hero.subtitle}</span>
          </h1>
          
          <p className="hero-description">
            {data.hero.description}
          </p>
          
          <button 
            className="cta-button primary"
            onClick={LandingController.handleContactClick}
          >
            {data.hero.cta}
            <span className="button-icon">→</span>
          </button>
        </div>

        <div className="hero-visual">
          <div className="video-card card-1">
            <div className="card-header">
              <div className="card-icon">📱</div>
              <div className="card-badge">YouTube Shorts</div>
            </div>
            <div className="card-preview">
              <div className="preview-gradient gradient-1"></div>
              <div className="preview-stats">
                <span>2K+</span>
                <span>Views ↑</span>
              </div>
            </div>
          </div>

          <div className="video-card card-2">
            <div className="card-header">
              <div className="card-icon">🎮</div>
              <div className="card-badge">Gaming</div>
            </div>
            <div className="card-preview">
              <div className="preview-gradient gradient-2"></div>
              <div className="preview-stats">
                <span>⭐ 4.9</span>
                <span>Rating</span>
              </div>
            </div>
          </div>

          <div className="video-card card-3">
            <div className="card-header">
              <div className="card-icon">🎵</div>
              <div className="card-badge">TikTok</div>
            </div>
            <div className="card-preview">
              <div className="preview-gradient gradient-3"></div>
              <div className="preview-stats">
                <span>999+</span>
                <span>Edições</span>
              </div>
            </div>
          </div>

          <div className="floating-badge badge-1">
            <span>100%</span>
            <small>Satisfação</small>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
