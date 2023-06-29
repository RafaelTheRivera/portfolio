import React from 'react';

const ProjectDetail = ({ projectId }) => {
  // Perform any logic to fetch project details based on projectId
  const projectDetails = {
    id: projectId,
    title: 'Project Title',
    description: 'Project Description',
    // Add more project details as needed
  };

  return (
    <div className="project-detail">
      <h2>Project Detail</h2>
      <h3>{projectDetails.title}</h3>
      <p>{projectDetails.description}</p>
      {/* Add more details about the project */}
    </div>
  );
};

export default ProjectDetail;
