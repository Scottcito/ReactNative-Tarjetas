import React from "react";
import Componentefuncional from "./Componentefuncional";
import BotonHooks from "./bottonIterable";
import Iterando from "./iterando";
const FunMaestro=({data})=>(
    <React.Fragment>
    <Componentefuncional
        nombre1="caremonda:D"/>
        <Iterando
        variableIterable={data}//Volvemos el state a props
        />
    <BotonHooks/>
</React.Fragment>
)
export default FunMaestro