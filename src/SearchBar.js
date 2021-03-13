import React from 'react';
import './SearchBar.css';
import redlinever from './Assets/redlinever.svg';
import searchlogo from './Assets/searchjpg.jpg';

function SearchBar(props){
    return(
        <div className='search_bar'>
            <ul className='search_buttons'>
                <li className='first_button'><button className='search_button1'><h1 className='search_button1'>Specialty/procedure</h1><h1 className='search_sub1'>Search for procedure</h1></button></li>
                <li className='search_item'><img style ={{position:'relative',top:'10px',height:'75px'}} src={redlinever} /></li>
                <li className='search_item'><button className='search_button2'><h1 className='search_button2'>Zip Code</h1><h1 className='search_sub2'>Search by zip code here</h1></button></li>
                <li className='search_item'><img className='search_icon' src={searchlogo} alt="search"/></li>
            </ul>
       </div>
    )
}

export default SearchBar;