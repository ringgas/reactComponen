import React from 'react';

import './App.css';

import Card from './components/card/Card';
import Navbar from './components/Navbar/Navbar';
import NextCardd from './components/NextCard/nextcard';
import Memberss from './components/Members/members';
import PastCardd from './components/PastCard/pastcard';

function App() {
  return (
    <div className="App">
    
    < Navbar/>
    < Card />
    
    <h2>Next Meetup</h2>

    < NextCardd/>

    <h1>About Meetup</h1>
        <p> 
          Come and meet other developers interested in the JavaScript and its library in the Greater Jakarta area<br /><br />
          Twitter: @JakartaJS and we user the hashtag #jakartajs
        </p>
        <br />

        <div>
          <h2>Members</h2> 
          <text className="SeeAll">See all</text><br />
        </div>

    < Memberss />

    <h2>Past Meetup</h2> 
    <text className="SeeAll">See all</text><br />

 

  <div class="flex-container">
  <div> <PastCardd date="27 November 2017" event_desc="#39 JakartaJS April Meetup with Kumparan" attendees="139"/></div>
  
  <div> <PastCardd date="27 November 2017" event_desc="#38 JakartaJS April Meetup with Blibli" attendees="113"/></div>
  <div> <PastCardd date="27 November 2017" event_desc="#37 JakartaJS April Meetup with Hacktiv8" attendees="110"/></div>  
</div>
  
  

    

    <hr></hr>
        <br />
        <center><text className="copyright">Copyright &copy; Hacktiv8 2020 </text></center>
        <br />
    </div>

    
    
  );
}

export default App;
