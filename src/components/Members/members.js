import React from 'react';


import AvatarImages from '../../assets/00319942.jpg';
import Avatar from '../Avatar/Avatar';

import  './members.css';


const MembersCard = (propsOrganizer) => {
    return(
        <div >
            <div className="CardMembers">
                <div > <Avatar src={AvatarImages} alt={AvatarImages} className="AvatarMembers"/></div>
                
                <div className="CardMembers2">
                <h2>Organizers</h2>
                <table>
               
                <tr>
                    <td>{propsOrganizer.name}</td>
                    <td></td>
                    <td>{propsOrganizer.sum}</td>
                </tr>
               
                </table>
               
               
                </div>
            </div>
        </div>
    )
}


export default MembersCard;