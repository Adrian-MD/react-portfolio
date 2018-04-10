import React from 'react';

const Form = () => {
    return(
        <form id="contact-form" className="uk-grid-small uk-width-1-2@s uk-align-center contact-form" action="mailto:amdavila91@gmail.com" method="POST" autoComplete="on" uk-grid="true">
            <input id="" className="uk-input uk-width-1-1@s" type="text" name="name" placeholder="Name" />
            <input id="" className="uk-input uk-width-1-1@s" type="text" name="company" placeholder="Company" />
            <input id="" className="uk-input uk-width-1-1@s" type="tel" name="phone" placeholder="Phone" />
            <input id="" className="uk-input uk-width-1-1@s" type="email" name="email" placeholder="Email" />
            <textarea id="" className="uk-textarea" name="message" cols="30" rows="10" placeholder="Message"></textarea>
            <button id="" className="uk-button uk-align-center uk-button-primary" type="submit">Submit</button>
        </form>
    );
}

export default Form;