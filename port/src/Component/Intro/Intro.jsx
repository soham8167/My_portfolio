
import React from 'react'
import './Intro.css'
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instragram from '../../img/instagram.png';
// import vector1 from '../../img/Vector1.png'
// import vector2 from '../../img/Vector2.png'
import me from '../../img/me.png';
function Intro() {
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span>Hi,I Am</span>
          <span>Soham Mondal</span>
          <span>I am currently focused on Frontend Development.</span>
        </div>
        {/* <button className="button i-button">See more</button> */}
          <div className="i-icons">
            <a href='https://github.com/soham8167'><img src={Github} alt=""/></a>
            
            <a href='https://www.linkedin.com/in/soham-mondal-2542b4257/'><img src={LinkedIn} alt=""/></a>
            
            <img src={Instragram} alt=""/>
          </div>
      </div>
      <div className="i-right">
        <img src={me} alt=""/> 
       {/* <img src={vector1} alt=""/>
       <img src={vector2} alt=""/> */}
      </div>
    </div>
  )
}

export default Intro
