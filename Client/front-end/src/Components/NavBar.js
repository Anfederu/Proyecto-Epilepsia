import React from "react";

const Navbar = () => {
  return (
    <header className="main-header">
    <nav className="main-header__nav">
        <ul className="main-header__item-list">
            <img className="logo-icon" src="icons/plogo.png"></img>
            <li className="main-header__item">
                <a class="<%= path === '/' ? 'active' : '' %>" href="/">Home</a>
            </li>
            
            <li class="main-header__item">
                <a class="<%= path === '/aboutUs' ? 'active' : '' %>" href="/aboutUs">About us</a>
            </li>
        </ul>
    </nav>
</header>
  );
};

export default Navbar;