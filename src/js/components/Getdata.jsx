import React, { useEffect , useState } from 'react'

const Getdata = ()=>{

    const [characters,setCharacters] = useState([{name: 'walter wide'},{name:'jesse pigman'},{name:'saul goodman'}])

    useEffect(()=>{
        console.log('voy a leer los personajes')
        fetch('https://rickandmortyapi.com/api/character')
        .then((response)=> response.json())
        // .then( (data)=> console.log(data.results) )
        .then( (data)=> setCharacters(data.results) )
        
    },[])
    return(
        <>
            <h1>Getdata</h1>
            <div>
                {characters.map( (personaje,index)=> 
                    <p key={index}>
                        el personaje es: {personaje.name} 
                        <img src={personaje.image}  alt={personaje.name}   />
                    </p> 
                )}

            </div>
        </>
    )
}

export default Getdata