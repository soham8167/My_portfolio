import React from 'react'
import './Navbar.css'
import Toggle from '../Toggle/Toggle'
function Navbar() {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">Soham</div>

         <Toggle/>
      </div>
      {/* <div className="n-right">
        <div className="n-list">
          <ul style={{listStyleType:'none'}}>
            <li>Home</li>
            <li >About</li>
            <li>Skills</li>
            <li>Project</li>
            
          </ul>
        </div>
        <button className="button n-button">Contact</button>
      </div> */}
    </div>

  )
}

export default Navbar
