import React from 'react';
import Form from '../Form/Form.js';
import ContactForm from '../Form/ContactForm.js';
import Copyright from './Copyright.js';

class Footer extends React.Component {
    render() {
        return (
            <div>
                <footer id="footer" uk-scrollspy="target: > div; cls:uk-animation-fade; delay: 500" className="footer uk-section uk-background-dark uk-light uk-padding-remove-bottom">
                    <div className="uk-container">
                        <h1 id="contact" className="uk-heading-line uk-text-center"><span>Contact Me</span></h1>
                        <div className="container uk-padding uk-padding-remove-bottom">
                            <ContactForm />
                        </div>
                    </div>
                    <Copyright />
                </footer>
            </div>
        );
    }
    
}

export default Footer;