import React from 'react';
import styled from 'styled-components';


import AvatarImages from  '../../assets/w644.jpg'
import Avatar from '../Avatar/Avatar';
// import Button from '../Button/Button';
import  './Card.css';

const Button = styled.button`

background: ${props => props.primary ? "#bba399" : "white"};
color: ${props => props.primary ? "white" : "#bba399"};

font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid #bba399;
border-radius: 3px;
`;



const Card = (PropsCard) => {
   

    return(
        <div >
            <div className="CardMeetup">
                <div ><Avatar src={AvatarImages} alt={AvatarImages}/></div>
                
                <div className="CardMeetup2">
                <h2>Hacktiv8 Meetup</h2>
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
                <td><Button>Join Us</Button></td>
                <td></td>
                 <td><Button primary>Sign Up</Button></td>
                </tr>
              
               
               </table>
                </div>
            </div>
        </div>
    )
}


export default Card;