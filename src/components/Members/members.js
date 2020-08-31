import React from 'react';


import AvatarImages from '../../assets/images.png';

import  './members.css';

const MembersCard = () => {
    return(
        <div >
            <div className="CardMembers">
                <div > <img src={AvatarImages} alt="Avatar" className="AvatarMembers"/></div>
                
                <div className="CardMembers2">
                <h2>Organizers</h2>
                <table>
               
                <tr>
                    <td>Adhy Wiranata</td>
                    <td></td>
                    <td>4 Others</td>
                </tr>
               
                </table>
               
               
                </div>
            </div>
        </div>
    )
}


export default MembersCard;