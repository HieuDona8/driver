import React, { Component } from 'react';
import './Header.css'
import icon from './../../assets/menuicon.svg';
import logo from './../../assets/logo.png';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="header-content">
          <a href="true">
            <img className="icon-menu" src={icon} alt="Icon" />
          </a>
          <a href="true" className="logo-link">
            <img className="logo" src={logo} alt="Logo" />
          </a>
          <div className='space'></div>
        </div>
        <div className="header-desktop">
          <a href="true" className="btn-logo">
            <img className="logo" src={logo} alt="Logo" />
          </a>
          <div className="menu">
            <a href="true">Learn more</a>
            <a href="true">List your car</a>
            <a href="true">Join</a>
            <a href="true">Log in</a>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;