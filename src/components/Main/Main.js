import React from 'react';
import About from '/About/About.js';
import Work from '/Work/Work.js';
import Tools from "/Tools/Tools.js";

const Main = () => {
    return(
        <main id="main" className="main">
            <About />
            <Work />
            <Tools />
        </main>
    );
}

export default Main;