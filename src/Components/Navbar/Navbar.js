import React, { useState } from 'react';
import { assets } from '../../assets';
import { BiMenuAltRight } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import './navbar.scss';

function Navbar() {
  const [isOpen, setisOpen] = useState(false);

  const toggleSidebar = () => {
    setisOpen(!isOpen);
  };

  return (
      <nav className={`nav ${isOpen ? 'open' : ''}`}>
        <div className="navbar">
          <div className="logo">
              <img src={assets.logo} alt="#" />
              <p className="logo_text"><span>l</span>ux.</p>
          </div>
          {isOpen ? (
            <div className="menu__button--close" onClick={toggleSidebar}>
              <AiOutlineClose size={22}/>
            </div>
          ) : (
            <div className="menu__button" onClick={toggleSidebar}>
              <BiMenuAltRight size={22} />
            </div>
          )}
        </div>
        <ul className={`nav__items ${isOpen ? 'open' : ''}`}>
          <li className='nav__item'>Home</li>
          <li className='nav__item'>About</li>
          <li className='nav__item'>Services</li>
          <li className='nav__item'>Inspiration</li>
          <li className='nav__item'>Contact</li>
        </ul>
      </nav>
  )
}

export default Navbar