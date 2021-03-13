import React from 'react';
import './InfoButton.css'
import button from './Assets/infoboard.svg'
import dummydoc from './Assets/fourth_illus.svg'

function Profilecard(props){
    const scrolltotop=()=>window.scrollTo({top:0,behavior:'smooth'});
    return(
        <div className='profilecardcontainer'>
            <img src={dummydoc} style={{position:'relative',top:'135px',left:'220px',width:'100px'}} />
            <h1 className='profiletitle'>Dr. Douglas Mazzuca</h1>
            <div className='profilecard' style={{position:'relative',bottom:'75px',left:'230px'}}>
        <button onClick={scrolltotop} className='profilecard'><h1 className='profilecard'>{props.text}</h1>
        <img src={button} style={{position:'relative',bottom:'130px',zIndex:'-1',height:'125px',right:'6px'}}/></button>
       </div>
       </div>
    )
}

export default Profilecard;