import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './NavBar.css';
import logo from './images/Alpha-White.png'
function NavBar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true)
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  
  const showButton = () =>
  {
    if(window.innerWidth <= 960) {
        setButton(false);
    }
    else{
        setButton(true);
    }
  };

  window.addEventListener('resize', showButton);
  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
            <Link to="" className='navbar-logo' onClick={closeMobileMenu}>
                <img src={logo} alt="Alpha Security Logo" className='navbar-logo-image'/> 
            </Link>

            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                        Home
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                        Services
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/support' className='nav-links' onClick={closeMobileMenu}>
                        Support
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/contact' className='nav-links-mobile' onClick={closeMobileMenu}>
                        Contact Us
                    </Link>
                </li>
            </ul>
            {button && <Button buttonStyle={'btn--outline'}>Contact</Button>}
        </div>
      </nav>
    </>
  );
}

export default NavBar;
