import React from 'react';
import Component from 'react';
import ReactDOM from 'react-dom';

const encode = (data) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "",company: "", phone: "", email: "", message: "" };
  }

  /* Here’s the juicy bit for posting the form submission */

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));

    e.preventDefault();
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, company, phone, email, message } = this.state;
    return (
      <form 
        id="contact-form" 
        onSubmit={this.handleSubmit} 
        className="uk-grid-small uk-width-1-2@s uk-align-center contact-form" 
        // acceptCharset="UTF-8"  
        // method="POST" 
        autoComplete="on" 
        uk-grid="true" 
        // netlify
      >
      <input 
          id="name" 
          className="uk-input uk-width-1-1@s" 
          type="text" 
          name="name" 
          value={name} 
          placeholder="Name" 
          onChange={this.handleChange} 
          required
      />
      <input 
          id="company" 
          className="uk-input uk-width-1-1@s" 
          type="text" 
          name="company" 
          value={company} 
          placeholder="Company" 
          onChange={this.handleChange} 
      />
      <input 
          id="phone" 
          className="uk-input uk-width-1-1@s" 
          type="tel" 
          name="phone" 
          value={phone} 
          placeholder="Phone" 
          onChange={this.handleChange} 
      />
      <input 
          id="email" 
          className="uk-input uk-width-1-1@s" 
          type="email" 
          name="email" 
          value={email} 
          placeholder="Email" 
          onChange={this.handleChange} 
          required
      />
      <textarea 
          id="message" 
          className="uk-textarea" 
          name="message" 
          cols="30" 
          rows="10" 
          value={message} 
          placeholder="Message" 
          onChange={this.handleChange} 
          required>
      </textarea>
      <input 
          type="hidden" 
          name="contact-form" 
          value="contact-form" />
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
    );
  }
}

ReactDOM.render(<ContactForm />, document.getElementById("root"));
export default ContactForm;