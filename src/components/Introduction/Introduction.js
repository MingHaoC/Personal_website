import React from 'react';
import './Introduction.css';
import pdf from '../../image/CV.pdf';

const Introduction = () => (
    <div>
        <span id="Introduction"/>
        <header>
            INTRODUCTION
        </header>
        <body>
        <b>
            Hi, I'm Ming, I'm currently studying at the University of Windsor, my goal is to become a Software
            Developer.
        </b>
        </body>
        <br/>
        <a href={pdf}>
            <button className="rectangle">
                <i className="fa fa-file File"> VIEW CV </i>
            </button>
        </a>
    </div>
);

export default Introduction;
