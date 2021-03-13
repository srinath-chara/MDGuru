import React from 'react';
import './NavBar.css';
import './Home.css'

import button from './Assets/button.svg'

function UserButton(props){
    return(
        <div className='user_button' style={{position:'relative',bottom:'75px',left:'230px'}}>
        <button className='user_button'><h1 className='user_button'>{props.text}</h1>
        <img src={button} style={{position:'relative',bottom:'64px',zIndex:'-1',height:'60px',right:'6px'}}/></button>
       </div>
    )
}

export default UserButton;