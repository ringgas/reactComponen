import React from 'react';



import Button from '../Button/Button';

import  './pastcard.css';

const PastCard = (props) => {
    return(
        <div >
            <div className="PastCardcss">
               
                <div className="PastCardcss2">
                <b>{props.date}</b><br />
            <hr></hr>
            <b>{props.event_desc}</b>
            <br></br>
            <p>{props.attendees} &nbsp;<text className="went">went</text></p>
            <Button buttonProps="View"/>
                </div>
            </div>
        </div>
    )
}




export default PastCard;
