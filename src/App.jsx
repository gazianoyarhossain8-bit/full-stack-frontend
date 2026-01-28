import React from "react"
import {Routes, Route} from 'react-router-dom';
import Home from "./Componets/Home";
import Register from "./Componets/Register";
import Login from "./Componets/Login";
import UsersCRUD from "./Componets/UsersCURD";  


function App() {
  return (
    <div>
{/*<Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="register" element={<Register/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/userscurd" element={<UsersCRUD/>}/>


  </Routes>*/}

      
<UsersCRUD/>
      
      
     

      
    </div>
  )
}

export default App