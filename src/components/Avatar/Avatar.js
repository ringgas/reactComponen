import React from 'react';

import AvatarImage from '../../assets/images.png';
import './Avatar.css';

const Avatar = () => {
    return (
        <img src={AvatarImage} alt="Avatar" className="Avatar"/>

    );
}

export default Avatar;