import React from "react";
import { Button } from "@mui/material";
import MyLogo from './rashid.jpeg';

export const Answer =() => {
    return(
         <div>
             <div>
                <img  src={MyLogo} alt="rashid" width='150px' height='150px'/>
                 <Button variant="text">Most asked questions</Button>
                 <Button variant="text">Most answered questions</Button>
                 <Button variant="text">Others</Button>
             </div>
             <div>
                  
             </div>
         </div>  
    );
};