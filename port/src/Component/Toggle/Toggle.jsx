import React from 'react'
import './Toggle.css'
// import { useState,  } from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {faMoon} from '@fortawesome/free-solid-svg-icons'
// import {faSun} from '@fortawesome/free-solid-svg-icons'


const Toggle = () => {
  // const [data,setData]=useState([]);
  // const [darkMode,setDarkMode]=useState(false);
//   useEffect(()=>{
// const ppp=async ()=>{
//   // const res=await fetch('');
//   const data=await res.json();
//   setData(data);
//   console.log(data);
// };
// ppp();
//   },[]);

  // return (
  //   <div>
  //     <div className={darkMode ? "dark-mode": "light-mode"}>
  //       <div className='switch-container'>
  //         <label className="switch">
  //           <input type="checkbox" 
  //           onChange={() => setDarkMode(!darkMode)} />
  //           <span class="slider round"></span>
  //         </label>
  //         {/* <label className='switch-label'>{darkMode ? "Dark" : "Light"}</label> */}
  //       </div>
  //     </div>
  //   </div>
  // )






  const setDarkMode=()=>{
    document.querySelector("body").setAttribute('data-theme','dark')
  }
  const setLightMode=()=>{
    document.querySelector("body").setAttribute('data-theme','light')
  }
  const ToggleTheme=(e)=>{
if(e.target.checked) setDarkMode();
else setLightMode();
  }
  return (
    <div>
      <div>
        <div className='switch-container'>
          <label className="switch">
            <input type="checkbox"
            onChange={ToggleTheme} 
             />
            <span class="slider round"></span>
          </label>
          {/* <label className='switch-label'>{darkMode ? "Dark" : "Light"}</label> */}
        </div>
      </div>
    </div>
  )
}

export default Toggle

