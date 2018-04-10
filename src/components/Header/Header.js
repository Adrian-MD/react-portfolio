import React from 'react';
import Navigation from './Navigation/Navigation.js';
import Content from './Content/Content.js';
import './Header.css';

const Header = () => {
    return(
        <header id="header" className="uk-section uk-padding-remove vh-max uk-transition-toggle header">
            <div className="uk-section uk-padding-remove uk-background-cover">
                <div className="uk-container-expand uk-position-relative">
                    <div className="uk-background-cover uk-background-center-center vh-max bannerimg" alt="city banner">
                        <div className="uk-overlay-primary uk-position-cover"></div>
                        <Navigation />
                        <Content />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;