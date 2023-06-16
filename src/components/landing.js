import React from 'react';

import './landing.css';
import MyLogo from './pile.png';
import { Button, TextField } from '@mui/material';

const Landing =() => {
    return(
        <section className='landing-page'>
            <div className='side-one'>
                <div className='head'>
                   <img src={MyLogo} alt='stack' width='150px' height='150px'/>
                   <h1>Stack Overflow</h1> 
                </div>
                <li>Ask questions</li>
                <li>Answer questions</li>
                <li>Share minds and grow together</li>
            </div>
            <div>
                <form className='register-form'>
                    <h3>Register</h3>
                    <TextField id='standard-basic' label='First-name' variant='standard' />
                    <TextField id='standard-basic' label='Last-name' variant='standard' />
                    <TextField id='standard-basic' label='Email' variant='standard' />
                    <TextField id='standard-basic' label='Password' variant='standard' />
                    <Button variant='contained' href='/home'>Sign in</Button>
                </form>
            </div>
        </section>
    )
}
export default Landing;