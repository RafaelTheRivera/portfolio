import React, { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import ProjectDetail from './components/ProjectDetail';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  const [currentRoute, setCurrentRoute] = useState('/');

  const handleRouteChange = (route) => {
    setCurrentRoute(route);
  };

  const handleViewDetails = (projectId) => {
    // Perform any logic to fetch project details based on projectId
    console.log('View details of project:', projectId);
  };

  const renderContent = () => {
    if (currentRoute === '/') {
      return <Home />;
    } else if (currentRoute === '/about') {
      return <About />;
    } else if (currentRoute === '/portfolio') {
      return (
        <Portfolio
          handleRouteChange={handleRouteChange}
          handleViewDetails={handleViewDetails}
        />
      );
    } else if (currentRoute.startsWith('/project/')) {
      const projectId = currentRoute.replace('/project/', '');
      return <ProjectDetail projectId={projectId} />;
    } else if (currentRoute === '/contact') {
      return <Contact />;
    } else {
      return <Home />;
    }
  };

  return (
    <div className="app">
      <Header handleRouteChange={handleRouteChange} />
      <div className="content">{renderContent()}</div>
      <Footer />
    </div>
  );
};

export default App;