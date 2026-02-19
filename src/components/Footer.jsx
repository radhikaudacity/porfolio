const Footer = () => {
  return (
    <footer className='footer'>
      <p>© {new Date().getFullYear()} Radhika · Frontend Developer</p>

      <p>
        <a className='case-nav-link' href='/projects'>
          Projects
        </a>{' '}
        ·{' '}
        <a className='case-nav-link' href='/contact'>
          Contact
        </a>
      </p>
    </footer>
  );
};

export default Footer;
