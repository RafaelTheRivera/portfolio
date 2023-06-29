import React from 'react';
import '../styles/about.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about__content">
        <h2 className="about__title">About Me</h2>
        <p className="about__text">I am a passionate <span className="highlight">UX/UI</span> engineer and researcher. I enjoy creating <span className="highlight">intuitive</span> and user-friendly web applications.</p>
      </div>
    </section>
  );
};

export default About;
