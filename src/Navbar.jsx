import React, { useEffect, useState } from 'react';
import './Nav.css';
import { NavLink } from 'react-router-dom';
import BurgerIcon from './BurgerIcon';

function Navbar() {
  const [scrolling, setScrolling] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);



  const handleScroll = () => {
    if (window.scrollY > 70) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <navbar>
      <BurgerIcon isOpen={isMenuOpen} handleToggle={toggleMenu} />
      <div className={`navbar ${scrolling ? 'scrolling' : ''} ${isMenuOpen ? 'open' : ''}`}>
        {/* Navigation links */}
        <NavLink to={'/'} className="l1">
          Work
        </NavLink>
        <NavLink to={'/About'} className="l1">
          About
        </NavLink>
        <NavLink to={'/Play'} className="l1">
          Play
        </NavLink>
        <NavLink to={'/Note'} className="l1">
          Note
        </NavLink>
        <NavLink to={'/Contact'} className="l1">
          Contact
        </NavLink>
      </div>
    </navbar>
  );
}

export default Navbar;
