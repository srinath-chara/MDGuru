import React from 'react';
import NavBar from './NavBar.js'
import './Home.css'
import redline from './Assets/redline.svg'
import mdguru from './Assets/mdguru.svg'
import UserButton from './UserButton.js'
import SearchBar from './SearchBar.js'
import pageoneillus from './Assets/pageoneillus.svg'
import secondpageillus from './Assets/secondpageillus.svg'
import brain from './Assets/brain.svg'
import InfoButton from './InfoButton.js';
import thirdillus from './Assets/third illus.svg';
import Infoboard from './Infoboard.js'
import fourthillus from './Assets/fourth_illus.svg'
import Profilelist from './Profilelist.js'
import integrate from './Assets/integrate.svg'
import heart from './Assets/heart.svg'
import seventhillus from './Assets/seventhillus.svg'
import ScrollToTop from './ScrollToTop.js'

export default class Home extends React.Component{
    constructor(){
        super();
        this.scrolltotop=this.scrolltotop.bind(this);
    }
    scrolltotop(e){
        e.preventDefault();
        window.scrollTo({top:0,behavior:'smooth'});
    }

render(){
    return(<div>
       <div className='nav_bar_pos'><NavBar /></div>
       <img src={redline} style={{width:'1275px',position:'relative',bottom:'45px',right:'7px'}}/> 
       <img src={mdguru} style={{position:'relative',right:'540px',bottom:'30px',width:'175px'}} /> 
       <ul className='user_button'>
           <li><UserButton text='Returning' /></li>
           <li><UserButton text='Start here' /></li>
       </ul>
       <h1 className='main_title'>Personalized healthcare for everyone</h1>
       <SearchBar />
       <img src={pageoneillus} style={{position:'relative',bottom:'270px',left:'370px',zIndex:'-2'}} />
       <img src={redline} style={{width:'1250px',position:'relative',bottom:'230px'}}/>
       <img src={secondpageillus} style={{position:'relative',bottom:'210px',right:'325px'}} />
       <img src={brain} style={{position:'relative',bottom:'365px',right:'210px'}} />
       <h1 className='second_title'>Data driven health care</h1>
       <p className='second_content'>Our innovative AI technology offers personalized healthcare plans and specialists based on your clinical background and demographics so that you get best quality care at the least possible cost.</p>
       <ul className='pagetwo_board'><li className ='pagetwo_board'><InfoButton text='Ethnic breakdown of patients treated by a doctor'/></li>
       <li className ='pagetwo_board'><InfoButton  text='Learn average out of pocket costs and average costs'/></li>
       <li className ='pagetwo_board'><InfoButton text='Understand pre-existing conditions ratio of patients seen by doctor'/></li>
       </ul>
       <ScrollToTop />
       <img src={redline} style={{width:'1250px',position:'relative',bottom:'500px'}}/>
       <img src={thirdillus} style={{position:'relative',bottom:'475px',left:'400px'}} />
       <img src={brain} style={{position:'relative',bottom:'650px',right:'775px'}} />
       <h1 className='third_title'>Medication insights</h1>
       <p className='third_content'>MdGuru offers utilization and outcome ratings for medications.</p>
       <p className='third_content'>What are the impacts of your medications you are prescribed?</p>
       <div className='Infoboard' style={{position:'relative',bottom:'650px',right:'30px'}}><Infoboard /></div>
       <h1 className='third_footer'>From CDC National Center for Health Statistics, 2020*</h1>
       <img src={fourthillus} style={{position:'relative',bottom:'350px',left:'400px'}} />
       <img src={brain} style={{position:'relative',bottom:'825px',right:'750px'}} />
       <h1 className='fourth_title'>Choose the right care team</h1>
       <p className='fourth_content'>Find a doctor or hospital based on how many procedures performed, successful procedures and average total cost. All of this and more available to help you make the best decision possible for your health.</p>
       <button onClick={this.scrolltotop}  className='find_doctor' ><h1 className='find_doctor'>Find the right doctor</h1></button>
       <h1 className='fifth_title'>Top doctors in the nation for most common surgeries</h1>
       <img src={redline} style={{width:'1250px',position:'relative',bottom:'575px'}}/>
       <Profilelist />
       <h1 className='integrate'>We integrate with</h1>
       <img src={integrate} style={{position:'relative',bottom:'815px',left:'110px',width:'125px'}} />
       <img src={heart} style={{position:'relative',bottom:'815px',left:'130px',width:'125px'}} />
       <h1 className='sixth_title'>Check out our blogs</h1>
       <img src={brain} style={{position:'relative',bottom:'740px',left:'175px'}} />
       <img src={redline} style={{width:'1250px',position:'relative',bottom:'725px'}}/>
       <ul className='blog'><li className ='blog'><InfoButton text='How to find right provider for post acute care.'/></li>
       <li className ='blog'><InfoButton text='Make your health care visit a successful one.'/></li>
       <li className ='blog'><InfoButton text='Find the best physician near your location.'/></li>
       <li className ='blog'><InfoButton text='What is the best way to get hospital quality ratings'/></li>
       </ul>
       <h1 className='seventh_title'>Take control of your health</h1>
       <p className='seventh_content'>Find your ideal health care team and price to make the most informed decision that's right for you.</p>
       <img src={seventhillus} style={{width:'600px',position:'relative',bottom:'675px',right:'160px'}}/>
       <img src={brain} style={{position:'relative',bottom:'800px',left:'30px',width:'275px'}} />
       <h1 className='seventh_footer'>Get started</h1>
       <img src={redline} style={{width:'1250px',position:'relative',bottom:'800px'}}/>
       <div className='footer_nav'><NavBar /></div>
    </div>)
}

}
