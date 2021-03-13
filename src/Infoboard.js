import React from 'react';
import './SearchBar.css';

function Infoboard(props){
    return(
        <div className='Infoboard'>
            <button className='Infoboard'>
                <ul className='Infoboard'>
                    <li classname='col_one' style={{paddingRight:'130px'}}><h1 classname='col_one'>Percent of persons using atleast one prescription drup in the past 30 days:48%(2013-2016)</h1></li>
                    <li classname='col_two' style={{paddingRight:'130px'}}><h1 classname='col_two'>From Physician office visits: Number of drugs ordered or provided: 2.9 Billion*</h1></li>
                    <li classname='col_three' style={{paddingRight:'0px'}}><h1 classname='col_three'>Percent of visits involving drug therapy:73.9%*</h1></li>
            </ul>
            </button>
            
       </div>
    )
}

export default Infoboard;