import React, { useState } from 'react';
import mobileLogo from '../dist/images/homeLogoMobile.svg';
import menu from '../dist/images/homeHamburger.svg';
import close from '../dist/images/close.svg';
import { Link } from 'react-router-dom';

function Nav() {
  const [opacity, setOpacity] = useState(0);
  const [scale, setScale] = useState(0);
  const [translate, setTranslate] = useState('30%');
  const [hamBurger, setHamBurger] = useState(menu);

  const animate = {
    opacity: opacity,
    transform: `translateX(${translate})`,
  };

  const showNav = () => {
    if (
      opacity === 0 &&
      scale === 0 &&
      translate === '30%' &&
      hamBurger === menu
    ) {
      setOpacity(1);
      setScale(1);
      setTranslate(0);
      setHamBurger(close);
    } else if (
      opacity === 1 &&
      scale === 1 &&
      translate === 0 &&
      hamBurger === close
    ) {
      setOpacity(0);
      setScale(0);
      setTranslate('30%');
      setHamBurger(menu);
    }
  };

  return (
    <>
      <div className='header'>
        <a href='https://vdev.netlify.app/' className='header__logo'>
          <img src={mobileLogo} alt='V Dev' />
        </a>
        <button className='header__hamBurger' onClick={showNav}>
          <img src={hamBurger} alt='hamBurger' />
        </button>
      </div>
      <div
        className='nav'
        style={{ opacity: opacity, transform: `scale(${scale})` }}>
        <ul className='nav__list' style={animate}>
          <li className='nav__listitem' style={animate}>
            <a href='#home' className='nav__link' onClick={showNav}>
              HOME
            </a>
          </li>
          <li className='nav__listitem' style={animate}>
            <a href='#portfolio' className='nav__link' onClick={showNav}>
              PORTFOLIO
            </a>
          </li>
          <li className='nav__listitem' style={animate}>
            <a href='#about' className='nav__link' onClick={showNav}>
              ABOUT
            </a>
          </li>
          <li className='nav__listitem' style={animate}>
            <a href='#contact' className='nav__link' onClick={showNav}>
              CONTACT
            </a>
          </li>
          <li className='nav__listitem ' style={animate}>
            <Link to='/blog'>
              <button className='nav__btn' onClick={showNav}>
                VISIT BLOG
              </button>
            </Link>
          </li>
          <li className='nav__listitem ' style={animate}></li>
        </ul>
      </div>
    </>
  );
}

export default Nav;
