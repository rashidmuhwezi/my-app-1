import  React from 'react';
import { Outlet } from 'react-router-dom';
import { Button } from '@mui/material';
import './search.css';

export const Search =() => {
    return(
      <>  
        <section>
            <div className='bar'>
              <div >
                <form action="/action_page.php">
                   <input type="text" placeholder="Search.." name="search" className='tab'/>
                </form>
                <Button variant='contained' >Search</Button>
              </div>
            </div>
        </section>
        <Outlet/>
       </> 
    );
};
