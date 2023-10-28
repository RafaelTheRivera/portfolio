import { Link } from 'react-router-dom';

const AnimalAdoption = ({ project }) => {
    return (
        <div>
            {/* Render custom content for the project */}
            <h2>{project.title}</h2>
            <img src={project.image} alt={project.title} />
            <p>{project.description}</p>
            {/* Add more customized content per project */}
            <p> Insert "Documentation" in this section (yuck)</p>
            {/* Link to go back to the main portfolio page */}
            <Link to="/">Back to Portfolio</Link>
        </div>
    );
};

export default AnimalAdoption;