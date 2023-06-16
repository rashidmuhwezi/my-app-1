import React from "react";
import { Button, TextField } from "@mui/material";


const Questions =() => {
    return(
        <div>
            <h2> Ask a questiion</h2>
            <TextField  id="outlined-multiline-static" label="Write your question here" multiline rows={4}  />
            <Button variant="contained">Publish</Button>
        </div>
    );
};
export default Questions;