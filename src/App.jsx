import React from "react"
import {Routes, Route} from 'react-router-dom';
import Home from "./Componets/Home";
import UsersCRUD from "./Componets/UsersCURD";  
import Register from "./Componets/Register";
import Login from "./Componets/Login";


function App() {
  return (
    <div>
<Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="register" element={<Register/>}/>
    <Route path="login" element={<Login/>}/>
    <Route path="/userscurd" element={<UsersCRUD/>}/>
 </Routes>

      
      
      
     

      
    </div>
  )
}

export default App