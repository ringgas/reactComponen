import React from 'react';



import Button from '../Button/Button';

import  './pastcard.css';

const PastCard = () => {
    return(
        <div >
            <div className="PastCardcss">
               
                <div className="PastCardcss2">
                <b>27 November 2017</b><br />
            <hr></hr>
            <b>#39 JakartaJS April Meetup with Kumparan</b>
            <br></br>
            <p>
              139 went
               
            </p>
            <button type="button" className="Buttonjs button2">View</button> 
                </div>
            </div>
        </div>
    )
}

const PastCard2 = () => {
    return(
        <div >
            <div className="PastCardcss">
               
                <div className="PastCardcss2">
                <b>27 Oktober 2017</b><br />
            <hr></hr>
            <b>#39 JakartaJS April Meetup with Kumparan</b>
            <br></br>
            <p>
              113 went
               
            </p>
            <button type="button" className="Buttonjs button2">View</button> 
                </div>
            </div>
        </div>
    )
}


export default PastCard;
