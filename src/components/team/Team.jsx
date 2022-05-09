import React from 'react'
import './Team.css'
import tm1 from '../../assets/img/team1.png'
import tm2 from '../../assets/img/team2.png'
import tm3 from '../../assets/img/team3.png'
import tm4 from '../../assets/img/team4.png'
import tm5 from '../../assets/img/team5.png'
import {FaLinkedin} from 'react-icons/fa'

 function Team() {
  return (
   <section id='team'>
       <h1 className='sec-head'>Team</h1>
       <div className="sec-content row">
       {/* Team Image, css background for this div */}
       <div className="col">
           <img src={tm1} alt="magic of money" />
           <a href='https://t.me/c/1505917928/20895' target="_blank" rel="noopener noreferrer">
               <FaLinkedin className='team-link'/>
           </a>
       </div>
       <div className="col">
           <img src={tm2} alt="magic of money" />
           <a href='#home' target="_blank" rel="noopener noreferrer">
               <FaLinkedin className='team-link'/>
           </a>
       </div>
       <div className="col">
           <img src={tm3} alt="magic of money" />
           <a href='https://www.linkedin.com/in/kadir-%C3%B6zcan-28a0571b4' target="_blank" rel="noopener noreferrer">
               <FaLinkedin className='team-link'/>
           </a>
       </div>
       <div className="col">
           <img src={tm4} alt="magic of money" />
           <a href='https://www.linkedin.com/in/emrercan' target="_blank" rel="noopener noreferrer">
               <FaLinkedin className='team-link'/>
           </a>
       </div>
       <div className="col">
           <img src={tm5} alt="magic of money" />
           <a href='https://www.linkedin.com/in/graph-designer-88223323a/' target="_blank" rel="noopener noreferrer">
               <FaLinkedin className='team-link'/>
           </a>
       </div>
       </div>
   </section>
  )
}
export default Team;