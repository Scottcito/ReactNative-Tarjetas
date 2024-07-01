import React from "react";
import FunMaestro from "../funMaestro";
import useFetch from "../../Hook/hook";
import url from "../../config";
import "../styles/style.css";
const Maestro=()=>{
    const {data}=useFetch(`${url}/info`)
    return <FunMaestro data={data}/>
        
}
/*
variableIterable &&  
class Maestro extends React.Component{
    state={
            data:[]
            }
        async componentDidMount(){
            await this.cargarComponentes() 
        }
        cargarComponentes=async()=>{
            let res=await fetch('http://localhost:8000/api/info')
            let data=await res.json()
            this.setState({
                data
            })
           
        }
    render(){
        return <FunMaestro
        data={this.state.data}
        />
    }
} */
export default Maestro;