import React from 'react';

const About = () => {
    return (
        <div id="about" uk-scrollspy="target: > div; cls:uk-animation-fade; delay: 500" className="uk-section uk-background-default uk-dark about">
            <div className="uk-container">
                <h1 className="uk-heading-line uk-text-center"><span>About</span></h1>
                <div className="container uk-padding uk-padding-remove-bottom">
                    <p>My name is Adrian and I am a self-taught Front-End Web Developer with Full-Stack aspirations. I began learning to code in my school years and taught myself HTML and CSS while working at my first SaaS company as soon as I graduated with a B.S. in Business Management: Marketing and a minor in Health Services Administration. The company focused on small and medium sized business growth by providing a software solution that integrated all digital marketing channels.</p>
                    <p>With the help of my co-workers and my own curiosity, I learned HTML and CSS to reduce turnaround time for website support tickets. Within 2 years, I went on to manage the customer care and web projects for all of our clients, developing many sites and tackling complex technical issues in the process. I became familiar with Bootstrap, JavaScript, jQuery, PHP, SQL and CMS platforms</p>
                    <p>During and since then, I dove headfirst into expanding my knowledge in HTML5, CSS3, JavaScript, GitHub, React, Node, Express, PostgresQL, and the command line to become a full-stack developer and pursue a career in the field.</p>
                    <p>I want to grow with a great team of people to a point where I will be able to create my own tech company; addressing problems in the healthcare industry.</p>
                    <button className="uk-button uk-align-center">View my resume</button>
                </div>
            </div>
        </div>
    );
}

export default About;