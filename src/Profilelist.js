import React from 'react';
import './SearchBar.css';
import Profilecard from './Profilecard.js'

function Profilelist(props){
    return(
        <div className='profilecard'>
            <ul style={{listStyleType:'none',display:'flex'}}>
            <li style={{paddingRight:'50px'}}><Profilecard text='Cataratcts removal Quality Score:5 stars Pennsville, NJ' /></li>
            
            <li style={{paddingRight:'50px'}}><Profilecard text='Cataratcts removal Quality Score:5 stars Pennsville, NJ' /></li>
            
            <li style={{paddingRight:'50px'}}><Profilecard text='Cataratcts removal Quality Score:5 stars Pennsville, NJ' /></li>
            
            <li style={{paddingRight:'50px'}}><Profilecard text='Cataratcts removal Quality Score:5 stars Pennsville, NJ' /></li>
            </ul>
            
       </div>
    )
}

export default Profilelist;