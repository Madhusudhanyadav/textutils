import "./App.css";

import Navbar from "./components/Navbar";
import Textarea from "./components/Textarea";
import About from "./components/About";
// import Particle from "./components/Particle";
import React, { useState } from 'react';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
function App() {  
  const [mode,setMode]=useState("light");
  
  const toggle=()=>{
    if(mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor="#042743";
    }
    else{
      document.body.style.backgroundColor="white";
      setMode("light");
    }
  }
  return (
    <>
     <Router>
      <Navbar title="textUtils" aboutText="About TextUtils" mode={mode} toggle={toggle}/>
    
     {/* <About /> */}
     
    <div className="container">
      
        {/* <Switch> */}
        <Routes >
        <Route path="/about" element={<About />}></Route>
        <Route path="/" index element={<Textarea text="Enter your text here" mode={mode}/> }></Route>
        {/* <Textarea text="Enter your text here" mode={mode}/> */}
        {/* </Switch> */}
        </Routes>
    </div>
    
    </Router>
    </>

  );
}

export default App;
