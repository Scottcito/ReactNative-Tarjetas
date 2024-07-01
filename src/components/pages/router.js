import React from "react";
import FunRouter from "../funRouter";
/* const Contenedor=()=>{
const [data,setData]=useState([])
} */
class Contenedor extends React.Component{
 state={
    form:{
        nombre:'',
        color:'',
        edad:'',
        nombre2:'',
        descripcion:'',
        imagenComponente:''

    }
}
handleChange=e=>{
    this.setState({
        form:{
            ...this.state.form,
            [e.target.name]:e.target.value
            }
        })
    }
    handleSubmit=async e=>{
        e.preventDefault()
        this.props.navigates('/raiz')
        try{
            let config={
                method:'POST',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(this.state.form)
            }
            let res=await fetch('http://localhost:8000/api/info',config)
            let json=await res.json()
            console.log(json)
            
                
        }
        catch(error){

        }
        
        console.log(this.state)
        
    }

    render(){
        return <FunRouter
        form={this.state.form}
        onChange={this.handleChange}
        onSubmit={this.handleSubmit}
        />
        
    }

}

export default Contenedor
