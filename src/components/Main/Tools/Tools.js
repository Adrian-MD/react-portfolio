import React from 'react';

const Tools = () => {
    return(
        <div id="tools" uk-scrollspy="target: > div; cls:uk-animation-fade; delay: 500" className="tools uk-section uk-background-primary uk-light">
            <div className="uk-container">
                <h1 className="uk-heading-line uk-text-center"><span>Tools</span></h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla voluptate dolorem voluptatem rem mollitia nobis aliquam possimus corporis laudantium? Provident qui doloribus accusamus quibusdam dignissimos nobis ipsum quam laudantium facere.</p>
                <div className="container uk-padding uk-padding-remove-bottom">
                    <div className="uk-container uk-flex uk-flex-around size5 toolset">
                        <i className="fab fa-html5"></i>
                        <i className="fab fa-css3-alt"></i>
                        <i className="fab fa-js-square"></i>
                        <i className="fab fa-git"></i>
                        <i className="fab fa-github"></i>
                        <i className="fab fa-react"></i>
                        <i className="fab fa-node-js"></i>
                        <i className="fa fa-terminal"></i>
                        <i className="fab fa-slack-hash"></i>
                        <i className="fab fa-trello"></i>
                        <i className="fa fa-cloud"></i>
                        <i className="fab fa-wordpress"></i>
                        <i className="fab fa-free-code-camp"></i>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Tools;