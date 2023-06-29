import React from 'react';
import '../styles/home.css';

const Home = () => {
  return (
    <section id="home" className="home">
      <div className="home__content">
        <h2 className="home__title">Welcome to My Portfolio</h2>
        <p className="home__subtitle">I'm a UX/UI and User Research Specialist</p>
        <button className="home__button">Learn More</button>
      </div>
    </section>
  );
};

export default Home;
