import React from 'react'
import './Sidedrawer.css'


const SideDrawer = props => {
    let drawerClasses = 'side_drawer';
    if (props.show) {
        drawerClasses = 'side_drawer open'
    }
    return (
        <nav className={drawerClasses}>
            <ul>
                <li><a href={"#Introduction"}>INTRODUCTION</a></li>
                <li><a href={"#Projects"}>PROJECTS</a></li>
                <li><a href={"#Contact"}>CONTACT</a></li>
            </ul>
        </nav>
    )
};

export default SideDrawer;
