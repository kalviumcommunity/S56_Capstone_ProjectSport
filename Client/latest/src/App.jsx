import React from "react";
import { BrowserRouter, Route ,Routes} from 'react-router-dom';
import Home from "./Components/Home";
import Login from "./Components/Login";
import Detail from "./Components/Detail";

function App(){
  return(
    
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/Home" element={<Home/>}/>
      <Route path="/Detail" element={<Detail/>}/>
    </Routes>
    </BrowserRouter>
    
  )
  
  
}

export default App;