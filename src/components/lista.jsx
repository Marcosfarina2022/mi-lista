import React,{useEffect,useState} from "react";
const Lista = ()=>{
   // const personas = ["leandro","Gaston","Jorge","Emilio"];
   //Creamos un useState para que me guarde el estado del arreglo de las personas
   const [personas, setPersonas]= useState([]);
   useEffect(()=>{
        fetch('http://localhost:3000/lista')
        .then(resp => resp.json())
        .then(data => setPersonas(data))
        .catch(error =>{
            console.log('no se pudo obtener las personas',error)
        });

        }, []);
   

    return (
        <>
        <h1>Lista de Personas</h1>
        <ul>
            {personas.map((persona,index)=>(
                <li key={index}>{persona.nombre} - {persona.apellido} - {persona.nacionalidad}</li>
           ))}
        </ul>
        </>
    )
}
export default Lista;