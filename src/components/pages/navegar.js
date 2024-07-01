import React from "react";
import Contenedor from "./router";
import { useNavigate } from "react-router-dom";

const Navegar=()=>{
    const navigate=useNavigate()
    return <Contenedor navigates={navigate}/>
}
export default Navegar;