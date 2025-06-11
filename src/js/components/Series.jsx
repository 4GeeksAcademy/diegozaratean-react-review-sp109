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