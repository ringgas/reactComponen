import React from 'react';



import AvatarImages from  '../../assets/w644.jpg'
import Avatar from '../Avatar/Avatar';
import Buttoncomponent from '../Button/Button';

import {
    Title, CardMeetup, CardMeetup2
}  from './card.style';




const Card = (PropsCard) => {
   

    return(
        <div >
            <CardMeetup>
                <div ><Avatar src={AvatarImages} alt={AvatarImages}/></div>
                
                <CardMeetup2>
               
    <Title>
    Hacktiv8 Meetup
    </Title>

                <table>
               
                <tr>
                    <td>Location</td>
                    <td></td>
                    <td>{PropsCard.location}</td>
                </tr>
                <tr>
                <td>Members</td>
                <td></td>
                 <td>{PropsCard.members}</td>
                </tr>
                <tr>
                <td>Organizers</td>
                <td></td>
                 <td>{PropsCard.organizer}</td>
                </tr>
                <tr>
                <td><Buttoncomponent text="Join Us"></Buttoncomponent></td>
                <td></td>
                 <td><Buttoncomponent primary="primary" text="Sign Up"></Buttoncomponent></td>
                </tr>
              
               
               </table>
               </CardMeetup2>
                </CardMeetup>
        </div>
    )
}


export default Card;