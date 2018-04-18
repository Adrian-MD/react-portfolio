import React from 'react';
import './Social.css';

const socialsList = [
  {
    id: 1,
    iconCSS: "fab fa-github",
    iconLink: "https://github.com/Adrian-MD"
  },
  // {
  //   id: 2,
  //   iconCSS: "fab fa-facebook",
  //   iconLink: "https://www.facebook.com/Adrian.M.Davila"
  // },
  // {
  //   id: 3,
  //   iconCSS: "fab fa-twitter",
  //   iconLink: "https://twitter.com/Traqic91"
  // },
  {
    id: 4,
    iconCSS: "fab fa-linkedin-in",
    iconLink: "https://www.linkedin.com/in/adrian-davila/"
  },
  {
    id: 5,
    iconCSS: "fas fa-envelope",
    iconLink: "mailto:a.m.davila91@gmail.com"
  },
]
const Social = () => {
  return (
    <div id="social" className="uk-sticky uk-background-dark uk-padding-small uk-flex uk-flex-column uk-flex-around social">
      {
        socialsList.map((link, i) => {
            return (
              <a key={link.id} href={link.iconLink} className="uk-margin-small grow"><i className={link.iconCSS}></i></a>
            );
        })
      }
    </div>
  )
}

export default Social;