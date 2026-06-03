import React, { useEffect } from 'react';
import '../pages/HomePage.css';
import ExperienceCard from '../components/ExperienceCard';

const experiences = [
  {
    title: 'Product Manager Intern',
    subtitle: 'Invesco',
    dates: 'Jun 2025 - Aug 2025',
    skills: ['Product Strategy', 'Cross-functional Alignment', 'Roadmapping'],
  },
  {
    title: 'Project Manager',
    subtitle: 'Host Haven Stays',
    dates: 'Dec 2024 - Jun 2025',
    skills: ['Project Management', 'User Research', 'Team Leadership'],
  },
  {
    title: 'Teaching Assistant — Information Architecture',
    subtitle: 'University of Washington',
    dates: 'Dec 2025 - Present',
    skills: ['Information Architecture', 'Mentoring', 'Product Design'],
  },
  {
    title: 'Director of Finance',
    subtitle: 'Women in Informatics',
    dates: 'Mar 2025 - Present',
    skills: ['Budget Management', 'Financial Planning', 'Leadership'],
  },
];

const HomePage = ({ onSectionChange }) => {
  useEffect(() => {
    const sectionIds = ['home', 'experience', 'about', 'contact'];
    const sections = sectionIds
      .map((sectionId) => document.getElementById(sectionId))
      .filter(Boolean);

    const scrollToHashSection = () => {
      const sectionId = window.location.hash.replace('#', '') || 'home';
      const section = document.getElementById(sectionId);

      if (!section) {
        return;
      }

      requestAnimationFrame(() => {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    };

    scrollToHashSection();
    window.addEventListener('hashchange', scrollToHashSection);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleSection) {
          onSectionChange(visibleSection.target.id);
        }
      },
      {
        root: document.querySelector('.main-content'),
        threshold: [0.55, 0.7, 0.9],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      window.removeEventListener('hashchange', scrollToHashSection);
      observer.disconnect();
    };
  }, [onSectionChange]);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero" id="home">
        <h1>Hey! I'm Dawn Nguyen</h1>
        <p className="tagline">Product Manager | UX Researcher | Information Architect</p>
        <p className="subtitle">
          I'm an early-career PM who cares about the intersection of user insight and business outcomes.
        </p>
      </section>

      {/* Experience Section */}
      <section className="experience-section" id="experience">
        <h2>Experience</h2>
        <div className="experience-grid">
          {experiences.map((exp, idx) => (
            <ExperienceCard
              key={idx}
              title={exp.title}
              subtitle={exp.subtitle}
              dates={exp.dates}
              skills={exp.skills}
            />
          ))}
        </div>
      </section>

      {/* About Snippet */}
      <section className="about-snippet" id="about">
        <h2>About Me</h2>
        <p>
          I'm an Informatics student at University of Washington with a passion for product management and user experience. With hands-on experience at Invesco and Host Haven Stays, I've learned how to balance user needs with business goals while leading cross-functional teams. I'm particularly drawn to information architecture, data-driven decision making, and building products that people actually love to use.
        </p>
      </section>

      {/* Contact Footer */}
      <footer className="contact-footer" id="contact">
        <h3>Let's Connect</h3>
        <div className="contact-links">
          <a href="mailto:dnguye3@uw.edu">
            <span className="contact-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 6h16v12H4z" />
                <path d="M4 6l8 7 8-7" />
              </svg>
            </span>
            dnguye3@uw.edu
          </a>
          <span className="divider">•</span>
          <a href="https://linkedin.com/in/nguyendut" target="_blank" rel="noopener noreferrer">
            <span className="contact-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </span>
            LinkedIn
          </a>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
