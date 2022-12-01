import { useState } from "react";
import Allpages from "./AllPages";
import HomePage from "./HomePage";
  // se for true vai iniciar pela HomePage, se não vai pela start

export default function Routes(){
    const [showHome, setShowHome] = useState("false")
    
    // Operador condicional, verifica se for true, ele vai iniciar na HomePagem se não vai iniciar na tela Start
     
    return <>{showHome === "true" ? <HomePage /> : <Allpages/> }</>;  
}


  