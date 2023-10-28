import React, { lazy, Suspense } from 'react';
import '../styles/portfolio.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import NotFound from './NotFound'; 

const projects = [
    {
        id: '1',
        title: 'Animal Adoption',
        description: 'Pittsburgh Paws',
        image: '/images/image.png',
        pathName: 'AnimalAdoption',
    },
    {
        id: '2',
        title: 'Another Project',
        description: 'Another Project Description',
        image: '/images/image2.png',
        pathName: 'AnotherProject',
    },
    // ... add other projects similarly
];



const ProjectComponent = (project) => {
    const { pathName, ...projectProps } = project;

    const Component = lazy(() =>
        import(`./${pathName}.js`)
            .catch(() => ({ default: NotFound }))
    );

    return <Component project={projectProps} />;
};

const Portfolio = () => {
    const navigate = useNavigate();

    return (
        <div className="portfolio-page">
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            {projects.map((project) => (
                                <div
                                    key={project.id}
                                    className="project-item"
                                    onClick={() => navigate(`/portfolio/${project.pathName}`)}
                                >
                                    <div
                                        className="project-content"
                                        style={{ backgroundImage: `url(${project.image})` }}
                                    >
                                        <h2 className="project-title">{project.title}</h2>
                                        <p className="project-description">{project.description}</p>
                                    </div>
                                </div>
                            ))}
                        </>
                    }
                />
                {projects.map((project) => (
                    <Route
                        path={`${project.pathName}`}
                        key={project.id}
                        element={
                            <Suspense fallback={<div>Loading...</div>}>
                                {ProjectComponent(project)}
                            </Suspense>
                        }
                    />
                ))}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    );
};

export default Portfolio;
