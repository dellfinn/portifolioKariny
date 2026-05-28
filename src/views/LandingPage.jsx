import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import Features from './components/Features';
import Contact from './components/Contact';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header className="header">
        <div className="header-container">
          <div className="logo">
            <span className="logo-icon">🎬</span>
            <span className="logo-text">Kariny<span className="logo-accent">Edits</span></span>
          </div>
          <nav className="nav">
            <a href="#servicos" className="nav-link">Serviços</a>
            <a href="#portfolio" className="nav-link">Portfolio</a>
            <a href="#contato" className="nav-link cta-nav">Contato</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Services />
        <Features />
        <Contact />
      </main>

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-content">
            <div className="footer-brand">
              <div className="logo">
                <span className="logo-icon">🎬</span>
                <span className="logo-text">Kariny<span className="logo-accent">Edits</span></span>
              </div>
              <p className="footer-description">
                Edições profissionais de vídeo, fotos e conteúdos com IA para YouTube, TikTok e streamers.
              </p>
            </div>

            <div className="footer-links">
              <div className="footer-column">
                <h4>Serviços</h4>
                <ul>
                  <li><a href="#shorts">YouTube Shorts</a></li>
                  <li><a href="#tiktok">TikTok</a></li>
                  <li><a href="#gaming">Gaming</a></li>
                </ul>
              </div>

              <div className="footer-column">
                <h4>Contato</h4>
                <ul>
                  <li><a href="https://wa.me/5562981958653">WhatsApp</a></li>
                  <li><a href="mailto:rodrigueskarinyedicoes@gmail.com">Email</a></li>
                  <li><a href="#instagram">Instagram</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; 2026 Kariny Edits. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
