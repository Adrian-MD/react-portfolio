import React, { Component } from 'react';

class Form extends Component {
    render() {
        const onSubmit = (token) => {
            document.getElementById("contact-form").submit()
        }
        return(
            <div>
                <script src="https://www.google.com/recaptcha/api.js" async defer></script>
                <form id="contact-form" className="uk-grid-small uk-width-1-2@s uk-align-center contact-form" acceptCharset="UTF-8" action="thank-you" method="POST" autoComplete="on" uk-grid="true" netlify>
                    <input 
                        id="name" 
                        className="uk-input uk-width-1-1@s" 
                        type="text" 
                        name="name" 
                        placeholder="Name" 
                        required
                    />
                    <input 
                        id="company" 
                        className="uk-input uk-width-1-1@s" 
                        type="text" 
                        name="company" 
                        placeholder="Company" 
                    />
                    <input 
                        id="phone" 
                        className="uk-input uk-width-1-1@s" 
                        type="tel" 
                        name="phone" 
                        placeholder="Phone" 
                    />
                    <input 
                        id="email" 
                        className="uk-input uk-width-1-1@s" 
                        type="email" 
                        name="email" 
                        placeholder="Email" 
                        required
                    />
                    <textarea 
                        id="message" 
                        className="uk-textarea" 
                        name="message" 
                        cols="30" 
                        rows="10" 
                        placeholder="Message" 
                        required>
                    </textarea>
                    <button 
                        id="" 
                        className="uk-button uk-align-center uk-button-primary uk-width-1-1 g-recaptcha" 
                        data-sitekey="6Lew3SMUAAAAAJ82QoS7gqOTkRI_dhYrFy1f7Sqy" 
                        data-callback='onSubmit' 
                        data-badge="inline" 
                        type="submit"
                        >Submit
                    </button>
                </form>
            </div>
        );
    }
}

export default Form;