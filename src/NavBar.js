import React from 'react';
import './NavBar.css';

function NavBar(){
    return(
        <div className="nav_bar"  >
            <ul style ={{listStyleType:'none',position:'relative',right:'30px',padding:'none'}}>
                <li style ={{display:'inline'}}><button className="navbar">Patients</button></li>
                <li style ={{display:'inline'}}><button className="navbar">Payors</button></li>
                <li style ={{display:'inline'}}><button className="navbar">Providers</button></li>
                <li style ={{display:'inline'}}><button className="navbar">Blogs</button></li>
                <li style ={{display:'inline'}}><button className="navbar">Contact Us</button></li>
                <li style ={{display:'inline'}}><button className="navbar">Privacy</button></li>
                <li style ={{display:'inline'}}><button className="navbar">About Us</button></li>
                <li style ={{display:'inline'}}><button className="navbar">API</button></li>
                <li style ={{display:'inline'}}><button className="navbar">AtoZ</button></li>
            </ul>
        </div>
    )
}

export default NavBar;