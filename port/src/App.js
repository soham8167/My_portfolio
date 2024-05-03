import Navbar from "./Component/Navbar/Navbar";
import './App.css'
import Intro from "./Component/Intro/Intro";
import About from "./Component/About/About";
import Skill from "./Component/Skill/Skill";
import Contact from "./Component/Contact/Contact";
import Project from "./Component/Project/Project";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (

//     <BrowserRouter>
      

//     <Routes>

// <Route path="/" element={<Home/>}/>
// <Route path="/about" element={<About/>}/>
// <Route path="/skills" element={<Skill/>}/>
// <Route path="/project" element={<Project/>}/>

//     </Routes>
//     </BrowserRouter>


    <div className="App">
     
      <Navbar/>
      <Intro/>
      <About/>
      <Skill/>
      <Project/>
      <Contact/>
      
    </div>
  );
}

export default App;
