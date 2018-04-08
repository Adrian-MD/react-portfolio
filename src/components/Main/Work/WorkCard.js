import React from 'react';

const WorkCard = () => {
    return(
        <div>
            <div className="uk-card uk-card-hover grow">
                <div className="uk-card-media-top">
                    <img src="images/data-concept.png" alt="" />
                </div>
                <div className="uk-card-body">
                    <h3 className="uk-card-title">Media Top</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                </div>
            </div>
        </div>
    );
}

export default WorkCard;