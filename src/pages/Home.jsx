import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <main className='home'>
      <section className='hero'>
        <div className='hero-content'>
          <h1>
            Frontend Developer Building <span>Scalable React Applications</span>
          </h1>

          <p>
            I develop responsive, performance-focused web applications using
            React, component-based architecture, and real-world API integration.
          </p>

          <div className='hero-actions'>
            <Link to='/projects' className='btn primary'>
              View Projects
            </Link>
            <Link to='/contact' className='btn secondary'>
              Contact Me
            </Link>
          </div>
        </div>

        <div className='hero-visual'>
          <div className='skill-card'>
            <h4>Core Skills</h4>
            <ul>
              <li>React</li>
              <li>JavaScript (ES6+)</li>
              <li>React Router</li>
              <li>Form Handling & Validation</li>
              <li>Responsive UI Architecture</li>
            </ul>
          </div>
        </div>
      </section>
      <section className='resume-cta'>
        <h2>Resume</h2>
        <p>
          Download my resume for a quick overview of my skills and experience.
        </p>

        <a
          href='/resume_radhika_frontend.pdf'
          className='btn secondary'
          download
        >
          Download Resume (PDF)
        </a>
      </section>

      <section className='what-i-do'>
        <h3>What I Do</h3>

        <div className='features'>
          <div className='feature-card'>
            <h4>Responsive Websites</h4>
            <p>
              Websites that look good and work smoothly on desktop, tablet, and
              mobile devices.
            </p>
          </div>

          <div className='feature-card'>
            <h4>React Development</h4>
            <p>
              Component-based development using React and React Router for clean
              structure and scalability.
            </p>
          </div>

          <div className='feature-card'>
            <h4>Website Improvements</h4>
            <p>
              Improving layout, styling, responsiveness, and usability of
              existing websites.
            </p>
          </div>
        </div>
      </section>

      <section className='why-me'>
        <h3>Professional Strengths</h3>

        <ul>
          <li>Structured, scalable component architecture</li>
          <li>Clean, readable code with logical project organization</li>
          <li>Strong debugging and problem-solving approach</li>
          <li>Experience with production deployment workflows</li>
        </ul>
      </section>

      <section className='cta'>
        <h3>Let’s Build Modern, Scalable Frontend Solutions</h3>
        <p>
          If you’re looking for a reliable front-end developer for your website
          or ongoing updates, I’d be happy to discuss your requirements.
        </p>

        <Link to='/contact' className='btn primary'>
          Get in Touch
        </Link>
      </section>
    </main>
  );
};

export default Home;
