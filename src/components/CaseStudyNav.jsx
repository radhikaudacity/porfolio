import { Link } from 'react-router-dom';
import projectDetails from '../data/projectDetails';
const CaseStudyNav = ({ index }) => {
  const prev = projectDetails[index - 1];
  const next = projectDetails[index + 1];
  return (
    <section className='case-footer-nav'>
      {prev && (
        <Link className='case-nav-link' to={`/case-study/${prev.slug}`}>
          ← Previous
        </Link>
      )}
      <Link to='/projects' className='case-nav-link'>
        Back to Projects
      </Link>
      {next && (
        <Link className='case-nav-link' to={`/case-study/${next.slug}`}>
          Next →
        </Link>
      )}
    </section>
  );
};
export default CaseStudyNav;
