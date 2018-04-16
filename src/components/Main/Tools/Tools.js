import React from 'react';
import './Tools.css';
import Toolcard from './Toolcard.js';

const toolsArray = [
    {
        toolID: 1,
        toolName: "HTML5",
        toolIconCSS: "fab fa-html5",
        toolUse: [
            "Semantic Markup",
            "Accessibility Compliant"
        ]
    },
    {
        toolID: 2,
        toolName: "CSS3",
        toolIconCSS: "fab fa-css3-alt",
        toolUse: [
            "Responsive Design",
            "Responsive Makeovers",
            "CSS Flex",
            "CSS Grid",
        ]
    },
    {
        toolID: 3,
        toolName: "JavaScript",
        toolIconCSS: "fab fa-js",
        toolUse: [
            "ES6",
            "Object Oriented Programming",
            "Functional Programming",
            "Algorithm Scripting",
            "Readable Code"
        ]
    },
    {
        toolID: 4,
        toolName: "Git/Github",
        toolIconCSS: "fab fa-github",
        toolUse: [
            "Collaboration",
            "Git Command Line",
            "Github GUIs (Github Desktop, GitKraken)"
        ]
    },
    {
        toolID: 5,
        toolName: "React JS",
        toolIconCSS: "fab fa-react",
        toolUse: [
            "JavaScript Library",
            "Reusable Component-Based Code",
            "Interactive UIs"
        ]
    },
    {
        toolID: 6,
        toolName: "Node JS",
        toolIconCSS: "fab fa-node",
        toolUse: [
            "Asynchronous JavaScript Runtime",
            "Scalable Network Apps"
        ]
    },
    {
        toolID: 7,
        toolName: "Terminal",
        toolIconCSS: "fa fa-terminal",
        toolUse: [
            "Linux Command Line",
            "Bash, NPM, Git"
        ]
    },
    {
        toolID: 8,
        toolName: "Slack",
        toolIconCSS: "fab fa-slack",
        toolUse: [
            "Collaboration",
            "Communication"
        ]
    },
    {
        toolID: 9,
        toolName: "Trello",
        toolIconCSS: "fab fa-trello",
        toolUse: [
            "Web-based Project Management",
            "Productivity",
            "Organization"
        ]
    },
    {
        toolID: 10,
        toolName: "Cloud Technologies",
        toolIconCSS: "fa fa-cloud",
        toolUse: [
            "File-Sharing",
            "Web-Based Productivity"
        ]
    },
    {
        toolID: 11,
        toolName: "WordPress",
        toolIconCSS: "fab fa-wordpress",
        toolUse: [
            "Websites",
            "Theme Manipulation",
            "Content Management System"
        ]
    },
    {
        toolID: 12,
        toolName: "Free-Code-Camp",
        toolIconCSS: "fab fa-free-code-camp",
        toolUse: [
            "Online Education Resource"
        ]
    }
];

const Tools = () => {
    return(
        <div id="tools" uk-scrollspy="target: > div; cls:uk-animation-fade; delay: 500" className="uk-section uk-background-primary uk-light tools">
            <div className="uk-container">
                <h1 className="uk-heading-line uk-text-center"><span>Tools</span></h1>
                <p>Listed below, you will find some of the many tools and languages that I have become familiar with and used in my work. Please note, just because you do not see something listed does not mean that I have no experience with it or cannot learn it quickly!</p>
                <div className="container uk-grid uk-grid-small uk-child-width-1-2@s uk-child-width-1-3@m" uk-grid="true">
                    {
                        toolsArray.map((tool, i) => {
                            return (
                                <Toolcard 
                                    key={tool.toolID}
                                    id={tool.toolID} 
                                    name={tool.toolName} 
                                    icon={tool.toolIconCSS} 
                                    desc={tool.toolUse} 
                                />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default Tools;