import React from 'react';

import Avatar from '../Avatar/Avatar';
import Button from '../Button/Button';
import  './Card.css';

const Card = () => {
    return(
        <div >
            <div className="CardMeetup">
                <div ><Avatar/></div>
                
                <div className="CardMeetup2">
                <h2>Hacktiv8 Meetup</h2>
                <table>
               
                <tr>
                    <td>Location</td>
                    <td></td>
                    <td>Jakarta, Indonesia</td>
                </tr>
                <tr>
                <td>Members</td>
                <td></td>
                 <td>1,078</td>
                </tr>
                <tr>
                <td>Organizers</td>
                <td></td>
                 <td>Adhy Wiranata</td>
                </tr>
                </table>
               
                <Button buttonProps="Join us"/>
                </div>
            </div>
        </div>
    )
}


export default Card;