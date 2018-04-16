import React from 'react';

const Toolcard = ({ id, name, icon, desc }) => {
    return (
        <div className="uk-flex uk-flex-around toolset">
            <div className="uk-background-dark uk-dark uk-flex uk-width-expand tool-wrapper">
                <div className="uk-padding-small uk-flex uk-flex-middle size5 tool-icon">
                    <i className={icon}></i>
                </div>
                <div className="uk-padding-small uk-flex-1 tool-content">
                    <h4 class="uk-heading-line"><span>{name}</span></h4>
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