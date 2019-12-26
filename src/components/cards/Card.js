import React from 'react';
import './Card.css'

const Card = props => (
    <div style={{backgroundColor : props.color}} className="Prntscrn">
            {console.log("testing " + props.color)}
        <b>
            {props.name}
        </b>
        <li>
            {props.l1}
        </li>
        <li>
            {props.l2}
        </li>
        <li>
            {props.l3}
        </li>
    </div>
);

export default Card;
