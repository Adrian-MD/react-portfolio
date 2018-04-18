import React from 'react';
import cardimg from '../../images/data-concept.png';

const WorkCardSmall = ({ imageUrl, title, desc, proUrl }) => {
    return(
      <div>
        <div className="uk-card uk-card-hover grow">
          <div className="uk-card-media-top">
              <img src={(imageUrl ? imageUrl : cardimg)} alt="" />
          </div>
          <div className="uk-card-body">
              <h3 className="uk-card-title">{title}</h3>
              <p>{desc}</p>
              <a href={proUrl} className="uk-button uk-button-dark uk-light uk-align-right">Project Link</a>
          </div>
        </div>
      </div>
    );
}

export default WorkCardSmall;