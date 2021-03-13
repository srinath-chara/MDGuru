import React,{useEffect,useState} from 'react';
import {useWindowScroll} from 'react-use';

const ScrollToTop=()=>{
    const {y:pageYOffset}=useWindowScroll();
    const [visible,setVisiblity]=useState(false);

    useEffect(()=>{
        if(pageYOffset>400){
            setVisiblity(true);
        }else{
            setVisiblity(false);
        }
    },[pageYOffset]);
    if(!visible){
        return false;
    }
    
    return(
        <div >
            <i ></i>
        </div>
    );
    
};
export default ScrollToTop;