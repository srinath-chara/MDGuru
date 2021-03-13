import React from 'react';
import button from './Assets/infoboard.svg'
import './InfoButton.css'
function InfoButton(props){
  const scrolltotop=()=>window.scrollTo({top:0,behavior:'smooth'});
    return(
        <div className='info_button' style={{position:'relative',bottom:'75px',left:'230px'}}>
        <button onClick={scrolltotop} className='info_button'><h1 className='info_button'>{props.text}</h1>
        <img src={button}  style={{position:'relative',bottom:'179px',zIndex:'-1',height:'175px',right:'7.75px'}}/></button>
       </div>
    )
}

export default InfoButton;