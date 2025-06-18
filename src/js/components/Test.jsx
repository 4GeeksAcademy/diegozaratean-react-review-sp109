import React, {useState} from "react";

const Test = ()=>{

    function leerTares(){
        console.log('leerTares')
        fetch('https://playground.4geeks.com/todo/users/naruto')
        .then( (response)=> response.json() )
        .then( (data)=> console.log(data.todos) )
    }
    function crearTares(){
        console.log('crearTares')
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "label": "tarea desde react",
                "is_done": false
            })
        };
        fetch('https://playground.4geeks.com/todo/todos/naruto',requestOptions)
        .then( (response)=> response.json() )
        .then( (data)=> console.log(data) )
    }

    function eliminarTares(){
        console.log('eliminarTares')
        const requestOptions = {
            method: "DELETE",
            redirect: "follow"
        };

        fetch("https://playground.4geeks.com/todo/todos/18", requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))

        
    }
    return(
        <>
            <h1>Test</h1>
            <button onClick={leerTares}> leer tareas</button>
            <button onClick={crearTares}> crear tarea</button>
            <button onClick={eliminarTares}> eliminar tarea</button>
           
        </>
    )
}

export default Test 