import React from "react";
import {Search} from './search';
import { Button} from "@mui/material";
import MyLogo from './rashid.jpeg';
import './home.css';

const home =() => {
    return(
       <section>
           <div className="top">
               <h3>Stack Overflow</h3>
               <div> <Search /></div>
           </div>
           <div>
               <div className="profile">
                   <img src={MyLogo} alt="rashid" width='150px' height='150px'  />
                   <Button variant="text">Profile</Button>
                   <Button variant="text">Questions</Button>
                   <Button variant="text">Sign out</Button>
               </div>
               <div>
                   <div>
                       <h4>Do you have a questiion ?</h4>
                       <Button variant="outlined" href="/question">Yes</Button>
                   </div>
                   <div>
                       
                   </div>
               </div>
           </div>
       </section>
    )
}
export default home;