import { useState,useEffect } from "react";

const useFetch=url=>{
    const [data,setData]=useState([])
    useEffect(()=>{
        const cargarComponentes=async()=>{
            let res=await fetch('http://localhost:8000/api/info')
            let data=await res.json()
            setData(data)
        }
        cargarComponentes()
    },[url])
    return data
}
export default useFetch