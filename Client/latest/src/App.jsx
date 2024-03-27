import React from "react";
import { BrowserRouter, Route ,Routes} from 'react-router-dom';
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import About from "./Pages/About";

function App(){
  return(
    
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/Home" element={<Home/>}/>
      <Route path="/About" element={<About/>}/>
    </Routes>
    </BrowserRouter>
    
  )
  
  
}

export default App;