import React from 'react';
import './ExperienceCard.css';

const ExperienceCard = ({ title, subtitle, dates, skills }) => (
  <div className="experience-card">
    <div className="card-header">
      <div>
        <h3 className="card-title">{title}</h3>
        <p className="card-subtitle">{subtitle}</p>
      </div>
      <span className="card-dates">{dates}</span>
    </div>
    {skills && (
      <div className="card-skills">
        {skills.map((skill) => (
          <span key={skill} className="skill-tag">
            {skill}
          </span>
        ))}
      </div>
    )}
  </div>
);

export default ExperienceCard;
