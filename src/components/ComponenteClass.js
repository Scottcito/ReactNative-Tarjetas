import React from "react";
import './styles/style.css'
import vacio from './Imagenes/Sin título.png'
const ComponenteImage=({color,nombre2,descripcion,imagenComponente})=>(
      <div className="ContenedorTarjeta">
            <div className="TarjetaKick"style={{background:`${color}`}}>
            <h1 style={{background:`${color}`}}>{nombre2}</h1>
            <img className="ImagenKickB" src={imagenComponente|| vacio} alt="Se accidento de camino aqui D:"/>
            <p className="TarjetaKick"style={{background:`${color || 'ECA299'}`}}>{descripcion}</p>
           
            </div>
            
            </div>
)

/* class ComponenteImage extends React.Component{  
    render(){
        const{color,nombre2,descripcion,imagenComponente}=this.props
        return(
            <div className="ContenedorTarjeta">
            <div className="TarjetaKick"style={{background:`${color}`}}>
            <h1 style={{background:`${color}`}}>{nombre2}</h1>
            <img className="ImagenKickB" src={imagenComponente|| vacio} alt="Se accidento de camino aqui D:"/>
            <p className="TarjetaKick"style={{background:`${color || 'ECA299'}`}}>{descripcion}</p>
           
            </div>
            
            </div>
        )
    }
}
 */
export default ComponenteImage