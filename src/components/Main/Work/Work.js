import React from 'react';
import WorkCard from './WorkCard.js';

const projects = [
    {
        id: 1,
        imageUrl: "",
        title: "Media Top",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
        proUrl: "https://google.com"
    },
    {
        id: 2,
        imageUrl: "",
        title: "Media Top",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
        proUrl: "https://google.com"
    },
    {
        id: 3,
        imageUrl: "",
        title: "Media Top",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
        proUrl: "https://google.com"
    },
    {
        id: 4,
        imageUrl: "",
        title: "Media Top",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
        proUrl: "https://google.com"
    },
    {
        id: 5,
        imageUrl: "",
        title: "Media Top",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
        proUrl: "https://google.com"
    },
    {
        id: 6,
        imageUrl: "",
        title: "Media Top",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
        proUrl: "https://google.com"
    },
]
const Work = () => {
    return(
        <div id="work" uk-scrollspy="target: > div; cls:uk-animation-fade; delay: 500" className="uk-section uk-background-muted uk-dark work">
            <div className="uk-container">
                <h1 className="uk-heading-line uk-text-center"><span>Work</span></h1>
                <div className="container uk-padding uk-padding-remove-bottom">
                    <div className="uk-child-width-1-3@m" uk-grid="true">
                        {
                            projects.map((project, i) => {
                                return (
                                    <WorkCard 
                                        key={project.id} 
                                        imageUrl={project.imageUrl} 
                                        title={project.title} 
                                        desc={project.desc} 
                                        proUrl={project.proUrl} 
                                    />
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Work;