import React from 'react';
import cardimg from '../../images/data-concept.png';

const WorkCard = ({ imageUrl, title, desc, proUrl }) => {
    return(
        <li className="uk-width-3-4">
            <div className="uk-panel">
                <img src={(imageUrl ? imageUrl : cardimg)} alt="" />
                <div className="uk-overlay uk-overlay-primary uk-position-bottom uk-text-center uk-transition-slide-bottom">
                <h3 className="uk-margin-remove">{title}</h3> 
                <div className="uk-margin-remove">
                    <p>{desc}</p>
                </div>
                <a href={proUrl} className="uk-button uk-button-secondary">Project Link</a>
            </div>
            </div>
        </li>
    );
}

export default WorkCard;