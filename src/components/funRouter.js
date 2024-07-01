import React from "react";
import Formulario from "./Formulario";
import ComponenteImage from "./ComponenteClass";
const FunRouter=({form,onChange,onSubmit})=>(
<React.Fragment>
    <ComponenteImage
    {...form}
    />
    <Formulario
    onSubmit={onSubmit}
    onChange={onChange}
    form={form}
    />
    </React.Fragment>)

export default FunRouter