import React from 'react'
import './Project.css';
import Ee from './Video.mp4';
const Project = () => {
  return (
    <div>
      <div className='p-container'>
        <div className='pp'>My Project</div>
        <div className='vv'>
        <video controls>
          <source src={Ee} type='video/mp4' />
        </video>
        </div>
      </div>
    </div>
  )
}

export default Project
  
