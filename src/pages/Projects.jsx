import { Link } from 'react-router-dom';
import projectDetails from '../data/projectDetails.js';
const Projects = () => {
  return (
    <main>
      <section className='projects-hero'>
        <h1>Projects</h1>
        <p>
          A selection of frontend projects demonstrating React, API integration,
          UI state management, and responsive design.
        </p>
      </section>

      {projectDetails.map((project, index) => (
        <section key={index} className='project-card'>
          <div className='project-image'>
            <a
              href={project.liveLink}
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src={project.image} alt={project.title} loading='lazy' />
            </a>
          </div>

          <div className='project-details'>
            <span className='project-type'>{project.type}</span>
            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <ul>
              {project.highlights.map((bullet, index) => (
                <li key={index}>{bullet}</li>
              ))}
            </ul>

            <div className='project-links'>
              <Link
                to={project.liveLink}
                className='btn primary'
                target='_blank'
              >
                Live Demo
              </Link>
              <Link
                to={`/case-study/${project.slug}`}
                className='btn secondary'
                target='_blank'
              >
                Case Study
              </Link>
              <Link to={project.gitHubLink} className='btn text'>
                View Code
              </Link>
            </div>
          </div>
        </section>
      ))}
    </main>
  );
};

export default Projects;
