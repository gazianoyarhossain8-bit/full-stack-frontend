import React from "react"
import {Routes, Route} from 'react-router-dom';
import Home from "./Componets/Home";
import UsersCRUD from "./Componets/UsersCURD";  


function App() {
  return (
    <div>
<Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/userscurd" element={<UsersCRUD/>}/>
 </Routes>

      
      
      
     

      
    </div>
  )
}

export default App