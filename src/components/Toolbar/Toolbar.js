import React from 'react';
import './Toolbar.css'
import '../SideDrawer/DrawerToggle'
import DrawerToggle from "../SideDrawer/DrawerToggle";


const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar_navigation">
            <div>
                <DrawerToggle toggles = {props.onClick} />
           </div>
            <div className="spacer"/>
            <div className="toolbar_navigation-items">
                <ul className="toolbar_list">
                    <li><a href={"#Introduction"}>INTRODUCTION</a></li>
                    <li><a href={"#Projects"}>PROJECTS</a></li>
                    <li><a href={"#Contact"}>CONTACT</a></li>
                </ul>
            </div>
        </nav>
    </header>

);

export default toolbar;
