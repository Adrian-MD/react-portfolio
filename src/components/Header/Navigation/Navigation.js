import React from 'react';
import logo from '../logo-concept-square-inverse.png';

const Navigation = () => {
    return(
        <div uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky">
            <nav className="uk-navbar-container" uk-navbar="true">
                <a href="" className="uk-navbar-item uk-logo"><img src={logo} alt="Logo" /></a>
                <div className="uk-navbar-right">
                    <ul className="uk-navbar-nav" uk-scrollspy-nav="closest: li; scroll: true">
                        <li className=""><a href="#about" uk-scroll="true">About</a></li>
                        <li className=""><a href="#work" uk-scroll="true">Work</a></li>
                        <li className=""><a href="#tools" uk-scroll="true">Tools</a></li>
                        <li className=""><a href="#contact" uk-scroll="true">Contact</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navigation;