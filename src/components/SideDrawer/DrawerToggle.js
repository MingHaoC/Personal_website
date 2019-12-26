import React from 'react';
import './Drawertoggle.css'

const DrawerToggle = props => (
    <button className= "toggle_button" onClick={props.toggles}>
        <div className= "toggle_button_line"/>
        <div className= "toggle_button_line"/>
        <div className= "toggle_button_line"/>
    </button>
);

export default DrawerToggle;
