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
                <a href="" className="uk-navbar-item uk-logo"><img src={logo} alt="Logo" /></a>
                <div className="uk-navbar-right">
                    <ul className="uk-navbar-nav" uk-scrollspy-nav="closest: li; scroll: true">
                        {
                            navlinks.map((nav, i) => {
                                return (
                                    <li className=""><a href={nav.link} uk-scroll={nav.scroll}>{nav.title}</a></li>
                                )
                            })
                        }
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navigation;