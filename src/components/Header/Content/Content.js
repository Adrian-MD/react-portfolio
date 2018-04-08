import React from 'react';

const Content = () => {
    return(
        <div uk-scrollspy="cls:uk-animation-fade, delay: 500" className="uk-overlay uk-position-center uk-light uk-text-center">
            <h1 className="uk-heading-primary">Adrian Davila</h1>
            <h2>Front-End Web Developer</h2>
            <a href="#about" className="uk-icon-link uk-margin-medium-top" uk-icon="chevron-down" ratio="2" uk-scroll></a>
        </div>
    );
}

export default Content;