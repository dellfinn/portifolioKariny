import React from 'react';
import './Features.css';

const portfolioItems = [
  {
    id: 1,
    title: "Versátil & Eficiente",
    description: "Edições profissionais que se adaptam ao seu estilo. Do engraçado ao épico, entrego tudo com agilidade máxima.",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&h=400&fit=crop"
  },
  {
    id: 2,
    title: "Economize tempo, cresça mais",
    description: "Enquanto você cria conteúdo, eu cuido da edição. Mais tempo para gravar, menos preocupação com a pós-produção.",
    image: "https://about.fb.com/wp-content/uploads/2023/04/09_Edit-Reel.png?resize=960%2C836"
  },
  {
    id: 3,
    title: "Pronto para as redes",
    description: "Vídeos otimizados para cada plataforma. Legendas, efeitos sonoros, cortes dinâmicos e muito mais.",
    image: "https://p16-capcut-cms-sg-useast5.capcutcdn-us.com/tos-useast5-i-6rr7idwo9f-tx/af2b1ded299744a0945722fd6f9d3e73~tplv-6rr7idwo9f-image.image"
  }
];

const Features = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contato');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <section className="features" id="portfolio">
      <div className="features-container">
        {portfolioItems.map((item, index) => (
          <div 
            key={item.id} 
            className={`feature-block ${index % 2 === 1 ? 'feature-reverse' : ''}`}
          >
            <div className="feature-content">
              <h3 className="feature-title">{item.title}</h3>
              <p className="feature-description">{item.description}</p>
              <button 
                className="feature-cta"
                onClick={scrollToContact}
              >
                Saiba Mais →
              </button>
            </div>
            
            <div className="feature-visual">
              <div className="visual-card">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="visual-image"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
