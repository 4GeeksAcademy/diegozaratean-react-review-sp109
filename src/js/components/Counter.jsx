import React, {useState,useEffect} from 'react'


const Counter = ()=>{

    const [count,setCount] = useState(0)
    const [count2,setCount2] = useState(20)

    // useEffect(funcion de callback,elemento a rastrear)
    useEffect(()=>{
        console.log('count cambio')
    },[count])

     useEffect(()=>{
        console.log('count2 cambio')
    },[count2])

    useEffect(()=>{
        console.log('count o count2 cambio')
    },[count, count2])


    useEffect(()=>{
        console.log('cuando me ejecuto')
    },[])
    // COTILLA

    return(
        <>
            <h1>Counter </h1>
            <div>
                <p>El valor de count es: {count}</p>
                <button onClick={()=>setCount(count +1)}>Agergar</button>
            </div>
            <div>
                <p>El valor de count2 es: {count2}</p>
                <button onClick={()=>setCount2(count2 -1)}>Quitar</button>
            </div>
        </>
    )
}

export default Counter