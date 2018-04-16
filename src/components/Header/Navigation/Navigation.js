import React from 'react';
import logo from '../logo-concept-square-inverse.png';
import logo1 from '../calig-dark.png';
import logo2 from '../calig-light.png';

const navlinks = [
    {
        id: 1,
        link: "#about",
        scroll: "true",
        title: "About",
    },
    {
        id: 2,
        link: "#work",
        scroll: "true",
        title: "Work",
    },
    {
        id: 3,
        link: "#tools",
        scroll: "true",
        title: "Tools",
    },
    {
        id: 4,
        link: "#contact",
        scroll: "true",
        title: "Contact",
    },
]

const Navigation = () => {
    return(
        <div uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky">
            <nav className="uk-navbar-container" uk-navbar="true">
                <div className="uk-navbar-left">
                    <a href="" className="uk-navbar-item uk-logo"><img src={logo} alt="Logo" /></a>
                </div>
                <div className="uk-navbar-right">
                    <ul className="uk-navbar-nav uk-visible@m" uk-scrollspy-nav="closest: li; scroll: true">
                        {
                            navlinks.map((nav, i) => {
                                return (
                                    <li className=""><a href={nav.link} uk-scroll={nav.scroll}>{nav.title}</a></li>
                                )
                            })
                        }
                    </ul>
                    <div class="uk-inline uk-hidden@m">
                        <button class="uk-button uk-button-default no-border" type="button">
                            <a href="#" class="uk-link-reset" uk-icon="icon: menu" ratio="1.5"></a>
                        </button>
                        <div uk-dropdown="pos: bottom-justify">
                            <ul class="uk-nav uk-dropdown-nav" uk-scrollspy-nav="closest: li; scroll: true">
                                {
                                    navlinks.map((nav, i) => {
                                        return (
                                            <li className="uk-h6 uk-margin-small grow"><a href={nav.link} uk-scroll={nav.scroll}>{nav.title}</a></li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navigation;