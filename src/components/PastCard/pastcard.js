import React from 'react';



import Button from '../Button/Button';

import  './pastcard.css';

const PastCard = ({data}) => {
    return(
        <>
            {
                data.map((item) =>(
                   
                    <div className="PastCardcsss" key={item.id}>
               
                <div className="PastCardcss2">
                <b>{item.date}</b><br />
            <hr></hr>
            <b>{item.deskripsi}</b>
            <br></br>
            <p>{item.went} &nbsp;<text>went</text></p>
            <Button buttonText="View"/>
                </div>
            </div>
            
                ))
            
            }
        </>
    )
}




export default PastCard;
