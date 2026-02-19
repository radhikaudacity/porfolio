import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <main className='home'>
      <section className='hero'>
        <div className='hero-content'>
          <h1>
            I build <span>clean, reliable websites</span>
          </h1>
          <p>
            Frontend developer specializing in React, JavaScript, and responsive
            websites for small businesses and educators.
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
              <li>React (Intermediate)</li>
              <li>JavaScript (ES6+)</li>
              <li>HTML & CSS</li>
              <li>Responsive Design</li>
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
        <h3>Why Work With Me</h3>

        <ul>
          <li>Clear communication and practical approach</li>
          <li>Focus on finishing projects cleanly</li>
          <li>Comfortable working independently</li>
          <li>Open to remote and flexible work (around 6 hours/day)</li>
        </ul>
      </section>

      <section className='cta'>
        <h3>Let’s Build Something Simple and Effective</h3>
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
