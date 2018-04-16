import React from 'react';
import WorkCard from './WorkCard.js';

const projects = [
    {
        id: 1,
        imageUrl: "",
        title: "This Website",
        desc: "This website was created using React.js to get a better sense of building within the React environment. It also uses Node.js, Express.js, UIKit, FontAwesome, Google Analytics, and Google Captcha. The source code can be found on my GitHub.",
        proUrl: "#"
    },
    {
        id: 2,
        imageUrl: "",
        title: "NJ Law Connect - Responsive Makeover",
        desc: "While working with my previous employer, I tackled this project to make this website mobile-friendly. The website uses a WordPress theme with many plugins. Using FTP, I customized the design of the site to make all current and future pages responsive.",
        proUrl: "https://njlawconnect.com"
    },
    {
        id: 3,
        imageUrl: "",
        title: "St. John's United Methodist Church",
        desc: "Built within a proprietary platform of my previous employer, I was the Project Manager and Developer for this site. I created a more modern design on a platform with a bit of an older design methodology. The sections like the header, banner, and areas of content are PHP modules that were customized by myself and integrated into the platform's backend for reuse with future clients.",
        proUrl: "http://www.stjohnsivyland.com/"
    },
    {
        id: 4,
        imageUrl: "",
        title: "At Home Medical",
        desc: "Client from previous employer. Wanted to modernize the site, make it mobile friendly, and have more control. I designed the site structure, homepage and inner page layout customizations. Everything is editable by the client, a level of customization I provided that is not typical of users on the platform.",
        proUrl: "http://www.athomemedical.org/"
    },
    {
        id: 5,
        imageUrl: "",
        title: "Face Recognizing React App",
        desc: "App built to recognize faces in uploaded images. App was created as part of an online course. The app was built in React.js and uses the ClarifAI face detection API, Node, Express, and PostgreSQL.",
        proUrl: "https://face-recognizing-app.herokuapp.com/"
    },
    {
        id: 6,
        imageUrl: "",
        title: "Robofriends React App",
        desc: "React app that searches through a database of existing users in real-time. The app uses the Robohash API and was the first React app I built as part of an online course.",
        proUrl: "https://google.com"
    },
]
const Work = () => {
    return(
        <div id="work" uk-scrollspy="target: > div; cls:uk-animation-fade; delay: 500" className="uk-section uk-background-muted uk-dark work">
            <div className="uk-container">
                <h1 className="uk-heading-line uk-text-center"><span>Work</span></h1>
                <div className="container uk-padding uk-padding-remove-bottom">
                    <div className="uk-grid-small uk-child-width-1-2@s uk-child-width-1-3@m uk-child-width-1-3@l" uk-grid="true">
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