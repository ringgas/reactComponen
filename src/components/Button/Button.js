import React from 'react';

import './Button.css';

const Button = ({buttonProps}) => {
    return(
        <div>
        <button type="button" className="Buttonjs button2">{buttonProps}</button> 
        </div>
    );
}


export default Button;