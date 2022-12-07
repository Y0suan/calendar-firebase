import { useEffect, useState } from "react";
import React from "react" ;
import Home from "./pages/Home";
import Logueo from "./pages/Logueo";



function App() {
  
const[usuarioGlobal , setusuarioGlobal] = useState(null);


  return <>{usuarioGlobal ? <Home/> : <Logueo/> }</>;

}

export default App
