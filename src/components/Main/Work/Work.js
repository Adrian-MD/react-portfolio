import React from 'react';
import WorkCard from './WorkCard.js';

const Work = () => {
    return(
        <div id="work" uk-scrollspy="target: > div; cls:uk-animation-fade; delay: 500" className="uk-section uk-background-muted uk-dark work">
            <div className="uk-container">
                <h1 className="uk-heading-line uk-text-center"><span>Work</span></h1>
                <div className="container uk-padding uk-padding-remove-bottom">
                    <div className="uk-child-width-1-3@m" uk-grid>
                        <WorkCard />
                        <WorkCard />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Work;