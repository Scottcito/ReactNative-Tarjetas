import React from "react";
import ComponenteImage from "./ComponenteClass";

const Iterando=({variableIterable})=>(
    <React.Fragment>
        
        {variableIterable.map(variableIterable=>(
        <ComponenteImage
            key={variableIterable.id}
            {...variableIterable}
        />  
     ))}
     </React.Fragment>
    
)
export default Iterando