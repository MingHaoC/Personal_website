import React from "react";
import './Project.css';
import Card from '../cards/Card';

const Project = () => {


    const cards = [[
        "Prntscrn",
        "#F33446",
        "Online application uses to capture desktop screenshots and sharing them via a simple url link",
        "Edit the registry to have the application start on startup",
        "Using HTTP request to register, login, and upload screenshots to the internet"
    ],
        [
            "Discord Bot",
            "skyblue",
            "Web scarping data from popular media site Reddit, based on user input (Subreddit, sorting and time period)",
            "Language filter, uses to censor out racist words or any words of the user choosing",
            "Basic calculator, welcoming and leaving messages when user joins or leaves the discord server, and assigning new user with role",
        ]
    ];           

    let display = [];
    for(let i = 0; i < cards.length; i++){
        display.push(cards[i]);

    }

    return (
        <div className="container">
            <span id="Projects"/>

            <div>
                <ul className="project_list">
                    <li>
                        <Card name = {display[0][0]} color = {display[0][1]} l1 = {display[0][2]} l2 = {display[0][3]} l3 = {display[0][4]}/>
                    </li>

                    <li>
                        <Card name = {display[1][0]} color = {display[1][1]} l1 = {display[1][2]} l2 = {display[1][3]} l3 = {display[1][4]}/>
                    </li>
                </ul>
            </div>
        </div>
    )
};

export default Project;
