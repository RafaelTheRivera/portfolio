import React, { useState } from 'react';
import '../styles/portfolio.css';

const projects = [
  {
    id: '1',
    title: 'Project 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: 'images/image.png', // Replace with the actual image path
  },
  {
    id: '2',
    title: 'Project 2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: 'images/image.png', // Replace with the actual image path
  },
  {
    id: '3',
    title: 'Project 3',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: 'images/image.png', // Replace with the actual image path
  },
  {
    id: '4',
    title: 'Project 4',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: 'images/image.png', // Replace with the actual image path
  },
  {
    id: '5',
    title: 'Project 5',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: 'images/image.png', // Replace with the actual image path
  },
  {
    id: '6',
    title: 'Project 6',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: 'images/image.png', // Replace with the actual image path
  },
  // Add more project objects as needed
];

const Portfolio = () => {
    const [selectedProject, setSelectedProject] = useState(null);
  
    const handleProjectClick = (projectId) => {
      setSelectedProject(projectId);
    };

    const handleGoBack = () => {
        setSelectedProject(null);
      };
  
    const renderProjectItems = () => {
      return projects.map((project) => (
        <div
          key={project.title}
          className="project-item"
          onClick={() => handleProjectClick(project.id)}
        >
          <div
            className="project-content"
            style={{ backgroundImage: `url(${project.image})` }}
          >
            <h2 className="project-title">{project.title}</h2>
            <p className="project-description">{project.description}</p>
          </div>
        </div>
      ));
    };
  
    return (
        <div className="portfolio-page">
          {selectedProject ? (
            <div className="project-details">
              <h2>{projects[selectedProject - 1].title}</h2>
              <p>{projects[selectedProject - 1].description}</p>
              {/* Add more project details */}
              <button onClick={handleGoBack}>Back</button>
            </div>
          ) : (
            renderProjectItems()
          )}
        </div>
      );
    };
  
  export default Portfolio;