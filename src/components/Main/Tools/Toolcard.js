import React from 'react';

const Toolcard = ({ id, name, icon, desc }) => {
    return (
        <div className="uk-container uk-flex uk-flex-around toolset">
            <div className="uk-background-dark uk-dark uk-flex uk-flex-middle uk-flex-center uk-flex-around tool-wrapper">
                <div className="uk-padding-small size5 tool-icon">
                    <i className={icon}></i>
                </div>
                <div className="uk-padding-small tool-content">
                    <h4 class="uk-heading-line uk-"><span>{name}</span></h4>
                    {
                        desc.map((use, i) => {
                            return (
                                <h6 className="uk-margin-remove">{desc[i]}</h6>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Toolcard;