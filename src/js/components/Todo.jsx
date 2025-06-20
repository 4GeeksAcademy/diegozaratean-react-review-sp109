import React, { useEffect, useState } from "react";

const Todo = ()=>{

    const [villanos, setVillanos] = useState(['joker','joker','dr octopus','pinguino','enigma/acertijo','picolo'])
    // como se define una variable con meemoria
    // const [nombre de variable, funciona que modiufica la variable] =. useState(valor iniclal de la variable) 
    const [tareas, setTareas] = useState([ ])

    useEffect(()=>{
        console.log('se cargo el componente')
        leerTareas()
    },[])

    function leerTareas(){
        console.log('leerTareas')
        fetch('https://playground.4geeks.com/todo/users/superman')
        .then( (response)=> response.json())
        .then( (data)=> setTareas(data.todos) )
        // .then( (data)=> console.log(data.todos) )
    }

    function agregarVillano(){
        console.log('agregarVillano')
        console.log(villanos)
        // villanos.push('dos caras')
        // villanos = []
        setVillanos([ ...villanos ,'dos caras'])
        console.log(villanos)
    }

    function eliminarTarea(idToDelete){
        console.log('eliminarTarea' + idToDelete)

        const requestOptions = {
            method: "DELETE",
            redirect: "follow"
        };

        fetch("https://playground.4geeks.com/todo/todos/" + idToDelete, requestOptions)
        .then((response) => response.text())
        .then((result) => {
            console.log(result)
           leerTareas()
        })
    }

    function crearTarea(){
        console.log('crearTarea')

         const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    "label": "desde react",
                    "is_done": false
                })
            };
        fetch('https://playground.4geeks.com/todo/todos/superman', requestOptions)
            .then(response => response.json())
            .then(data => console.log(data));
    }

    return(
        <>
            <h1>Todo</h1>
            <button onClick={leerTareas} >leer tareas</button>
            <h3>Tareas de Superman: </h3>
            <button onClick={crearTarea} >crear tarea</button>
            {tareas.map( (tarea)=> 
                <p key={tarea.id}> 
                    tarea {tarea.id} : {tarea.label}
                    <button onClick={()=>eliminarTarea(tarea.id)} >eliminar tarea</button>
                </p> 
            )}
            <h3>villanos: </h3>
            {villanos.map( (villano, index)=> <p key={index}>villano {index}: {villano} </p> )}
            <button onClick={agregarVillano} >agregar Villano</button>
        </>
    )
}

export default Todo