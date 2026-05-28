import React from 'react';
import { LandingController } from '../../controllers/landingController';
import './Stats.css';

const Stats = () => {
  const data = LandingController.getData();
  
  return (
    <section className="stats">
      <div className="stats-container">
        <div className="stats-header">
          <h2 className="stats-title">
            Resultados que
            <br />
            <span className="gradient-text">Falam por si</span>
          </h2>
        </div>
        
        <div className="stats-grid">
          {data.stats.map((stat) => (
            <div key={stat.id} className="stat-card">
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
