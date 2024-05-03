import React from 'react'
import './About.css'
// import Card from '../Card/Card';
import Resume from './resume.pdf';

const About= () => {
  return (
    <div className="services">
      {/* left side.. */}
      <div className="awesome">
        <span>About Me</span>

        <spane>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, eum omnis ullam odit tempora ipsum provident.hdhf asdf jll' asdfjkll sofaj sra i am agood mboy hi ihf di dhf hfd dffi h dfihf ffowenf fof iof
          <br />
          I am the  noob
        </spane>
        <a href={Resume}download><button className='button s-button'>Download CV</button></a>
        
      </div>
      
      {/* <div className="cards">

        <div style={{left:'14rem'}}>
          <Card
            emoji={'HeartEmoji'}
            heading={'Design'}
            detail={"Html,Sketch,Photoshop"}
          />
        </div>
        
        <div style={{top:"12rem",left:'-4rem'}}>
          <Card
            emoji={'HeartEmoji'}
            heading={'Design'}
            detail={"React,Css,JS"}
          />
        </div>
        <div style={{right:'-41rem',bottom:'18rem'}}>
          <Card
            emoji={'HeartEmoji'}
            heading={'Design'}
            detail={"JAVA,C++,Photoshop"}
          />
        </div>
        <div style={{top:"22rem",left:'13rem'}}>
          <Card
            emoji={'HeartEmoji'}
            heading={'Design'}
            detail={"Js,C++,Photoshop"}
          />
        </div> 
      </div>*/}
    </div>
  )
}

export default About
