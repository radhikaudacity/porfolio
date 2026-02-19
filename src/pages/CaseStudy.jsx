import projectDetails from '../data/projectDetails';
import { useParams, Link } from 'react-router-dom';
import CaseStudyNav from '../components/CaseStudyNav';
import { Helmet } from 'react-helmet-async';

const CaseStudy = () => {
  const { slug } = useParams();

  const caseStudyIndex = projectDetails.findIndex((item) => item.slug === slug);

  if (caseStudyIndex < 0) {
    return <p>Case study not found.</p>;
  }
  const caseStudy = projectDetails[caseStudyIndex];

  return (
    <main>
      <Helmet>
        <title>{caseStudy.title} | Case Study</title>
        <meta name='description' content={caseStudy.overview} />
      </Helmet>
      <section className='case-hero'>
        <div className='case-hero-content'>
          <div>
            <h1>{caseStudy.title}</h1>
            <p>{caseStudy.overview}</p>
            <div className='case-links'>
              <Link
                to={caseStudy.liveLink}
                className='btn primary'
                target='_blank'
              >
                Live Demo
              </Link>

              <Link
                to={caseStudy.gitHubLink}
                className='btn secondary'
                target='_blank'
              >
                View Code
              </Link>
            </div>
          </div>
          <div className='back-to-project'>
            <Link to='/projects' className='case-nav-link'>
              ← Back to Projects
            </Link>
          </div>
        </div>
      </section>
      <section className='case-content'>
        <section>
          <h3>Key Features</h3>

          <dl className='feature-list'>
            {caseStudy.keyFeatures.map((bullet, index) => (
              <div key={index} className='feature-item'>
                <dt className='feature-label'>{bullet[0]}</dt>
                <dd className='feature-value'>{bullet[1]}</dd>
              </div>
            ))}
          </dl>
        </section>
        <section>
          <h3>Tech Stack</h3>
          {caseStudy.tech.join(' . ')}
        </section>

        <section>
          <h3>Outcome</h3>
          <p>{caseStudy.outcome}</p>
        </section>

        <CaseStudyNav index={caseStudyIndex} />
      </section>
    </main>
  );
};

export default CaseStudy;
