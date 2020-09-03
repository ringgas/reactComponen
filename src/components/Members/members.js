import React from 'react';


import AvatarImagess from '../../assets/00319942.jpg';
import AvatarMemberss from '../AvatarMembers/avatarmembers';

import  './members.css';



const MembersCard = (propsOrganizer) => {
    return(
        <div >
            <div className="CardMembers">
                <div > < AvatarMemberss src={AvatarImagess} alt={AvatarImagess}/></div>
                
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