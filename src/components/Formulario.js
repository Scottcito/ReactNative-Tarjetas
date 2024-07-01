import React from "react";

import "./styles/style.css"

const Formulario=({onChange,onSubmit,form})=>(
    <div>
    <form className="Formulario_personaje" onSubmit={onSubmit}>
        <label>Nombre Usuario</label>
        <input type="text" name="nombre" placeholder="Pepito Perez" onChange={onChange} value={form.nombre}/>
        <label>Edad: </label>
        <input type="number" name="edad" placeholder="25" onChange={onChange} value={form.edad}/>
        <label>Color: </label>
        <input type="text" name="color" placeholder="pink pd: en ingles por favor here only english" onChange={onChange} value={form.color}/>
        <label>Nombre Personaje o Objeto: </label>
        <input type="text" name="nombre2" placeholder="Pedro picapiedra" onChange={onChange} value={form.nombre2}/>
        <label>Descripcion: </label>
        <input type="text" name="descripcion" placeholder="mete mucho pericooo" onChange={onChange}  value={form.descripcion}/>
        <label>Enlace de tu imagen: </label>
        <input type="text" name="imagenComponente" placeholder="https://enlaceX.com/" onChange={onChange}  value={form.imagenComponente} className="imagenes"/>
        <button type="submit">Enviar Respuestas</button>
    </form>
</div>
)
export default Formulario