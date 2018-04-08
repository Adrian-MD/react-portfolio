import React from 'react';

const Navigation = () => {
    return(
        <div uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky">
            <nav className="uk-navbar-container" uk-navbar>
                <a href="" className="uk-navbar-item uk-logo"><img src="images/logo-concept-square-inverse.png" alt="Logo" /></a>
                <div className="uk-navbar-right">
                    <ul className="uk-navbar-nav" uk-scrollspy-nav="closest: li; scroll: true">
                        <li className=""><a href="#about" uk-scroll>About</a></li>
                        <li className=""><a href="#work" uk-scroll>Work</a></li>
                        <li className=""><a href="#tools" uk-scroll>Tools</a></li>
                        <li className=""><a href="#contact" uk-scroll>Contact</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navigation;