import React, { useState } from "react";

const Series = ()=>{

    const [favorites, setFavorites] = useState(['better call saul','suits','band of brothers','mr robot','paradaise','como defender a un asesino'])

    let nueva= 'stranger things'

    function add(){
        console.log('add')    
        console.log(favorites)
        // favorites.push(nueva)
        console.log(...favorites)
        setFavorites([...favorites, nueva])
        console.log(favorites)
    }
    return(
        <>        
            <h1>Series</h1>
            <h2>tienes {favorites.length} series favoritas</h2>
            {favorites}
            <div>
                <button onClick={add}>Agregar serie</button>
            </div>
             {favorites.map( (serie,index)=> <p key={index}> el indice es : {index} {serie}</p> )}
        </>
    )
}

export default Series

// PSEUDOCODIGO
// DONE: agregar un input
// DONE: tener trazabildiad del input en react
// DONE: añadir un elemento a una lista
// DONE: identificar cuando doy enter en un input
// identificar caundo hago hover sobre un elemento de una lista
// elimianr un elemento de una lista
// DONE: mostrar en react la lista de elementos 
// DONE: un contador de los elementos de la lista
// interfaz grafica o dar estilos o ahcer que se vea como nos lo pidieron

