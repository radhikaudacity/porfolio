import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo01.png';
const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className='site-header'>
      <div className='logo'>
        <NavLink to='/' onClick={() => setOpen(false)}>
          <img src={logo} alt='logo' loading='lazy' />
        </NavLink>
      </div>

      <button
        className='menu-toggle'
        onClick={() => setOpen(!open)}
        aria-label='Toggle navigation menu'
        aria-expanded={open}
      >
        ☰
      </button>

      <nav className={`nav ${open ? 'open' : ''}`}>
        <NavLink to='/' end onClick={() => setOpen(false)}>
          Home
        </NavLink>
        <NavLink to='/projects' onClick={() => setOpen(false)}>
          Projects
        </NavLink>
        <NavLink
          to='/contact'
          className='nav-contact'
          onClick={() => setOpen(false)}
        >
          Contact
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
