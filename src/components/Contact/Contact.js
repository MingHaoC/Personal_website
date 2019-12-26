import React from "react";
import './Contact.css';

const Contact = () => (

    <div className="outline">
        <span id="Contact"/>
        <header className="contact_header"> CONTACT
        </header>

        <div className="contact_navigation-items">
            <ul className="contact_list">
                <li className="contact_li">
                    <a href={"mailto:chen1lf@uwindsor.com"}>
                        <button className="bound">
                            <i className="fa fa-envelope-square icon"> </i>
                            <br/>
                            chen1fl@uwindsor.ca
                        </button>
                    </a>
                </li>

                <li className="contact_li">
                    <a href={"https://www.github.com/MingHaoC"}>
                        <button className="bound">
                            <i className="fab fa-github-square icon-2x icon"> </i>
                            <br/>
                            MingHaoC
                        </button>
                    </a>
                </li>

                <li className="contact_li">
                    <a href={"https://www.linkedin.com/in/MingHaoC"}>
                        <button className="bound">
                            <i className="fab fa-linkedin icon"> </i>
                            <br/>
                            MingHaoC
                        </button>
                    </a>
                </li>

            </ul>
        </div>
    </div>
);


export default Contact;
