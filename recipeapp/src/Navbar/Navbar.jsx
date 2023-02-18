import React from 'react';
import {Link} from 'react-scroll'
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaBible } from 'react-icons/fa';
import images from '../constants/images'
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo8B} alt="app__logo" />
      </div>
      <ul className="app__navbar-links">
        <li><Link to="hero" spy={true} smooth={true} offset={50} duration={400}>Home</Link></li>
        <li><Link to="recipes" spy={true} smooth={true} offset={5} duration={400}>Recipes</Link></li>
        <li><Link to="grocerylist" spy={true} smooth={true} offset={50} duration={400}>Grocery List</Link></li>
        <li><Link to="about" spy={true} smooth={true} offset={5} duration={400}>About</Link></li>
        <li><Link to="inspiration" spy={true} smooth={true} offset={5} duration={400}>Inspiration</Link></li>
      </ul>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu size={27} style={{ color: 'rgb(201, 197, 175)' }} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <FaBible size={27} style={{ color: 'rgb(201, 197, 175)' }}className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links">
            <li><Link to="hero" spy={true} smooth={true} offset={50} duration={400} onClick={() => setToggleMenu(false)}>Home</Link></li>
            <li><Link to="recipes" spy={true} smooth={true} offset={5} duration={400} onClick={() => setToggleMenu(false)}>Recipes</Link></li>
            <li><Link to="grocerylist" spy={true} smooth={true} offset={50} duration={400} onClick={() => setToggleMenu(false)}>Grocery List</Link></li>
            <li><Link to="about" spy={true} smooth={true} offset={15} duration={400} onClick={() => setToggleMenu(false)}>About</Link></li>
            <li><Link to="inspiration" spy={true} smooth={true} offset={5} duration={400} onClick={() => setToggleMenu(false)}>Inspiration</Link></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;















// import React, { useState } from 'react'
// import './Navbar.css'
// import images from '../constants/images'
// import { GiHamburgerMenu } from 'react-icons/gi';
// import { FaBible } from 'react-icons/fa';


// const Navbar = () => {
//   const [click, setClick] = useState(false)
//     const handleClick = () => setClick(!click)

//     return (
//       <div className='navbar'>
//         <div className='logo'>
//           <a href="/"><img src={images.logo8B} alt="logo" /></a>
//         </div>
//           <ul className={click ? 'nav-menu active' : 'nav-menu'}>
//           <li className='nav-item'><a href="/" className='active'>Home</a></li>
//           <li className='nav-item'><a href="/recipes">Recipes</a></li>
//           <li className='nav-item'><a href="/list">Grocery List</a></li>
//           <li className='nav-item'><a href="/about">About</a></li>
//           <li className='nav-item'><a href="/quotes">Inspiration</a></li>
//           </ul>
//         <div className='hamburger' onClick={handleClick}>
//           {click ? (<FaBible size={30}  
//           style={{ color: 'rgb(201, 197, 175)' }} />) 
//           : (<GiHamburgerMenu size={30} 
//           style={{ color: 'rgb(201, 197, 175)' }} />)}
//         </div>
//       </div>
//     )
// }

// export default Navbar


