import React, {useState, useReducer} from 'react'
import { counterReducer } from './counterReducer'

const Reducer = ()=>{

    const [count,setCount] = useState(10)
    const [ state, dispatch] = useReducer(counterReducer, { count: 0, message: 'Tu no has cambiado'})
    return(
        <>
            <h1>Reducer </h1>
            <div>
                <p>El valor de count es: {count}</p>
                <button onClick={()=>setCount(count +1)}>Agergar</button>
            </div>
            <div>
                <p>El valor del estado count es: {state.count}</p>
                <h3>{state.message}</h3>
                <button onClick={()=>dispatch({ type: 'increment'})}>Agergar</button>
                <button onClick={()=>dispatch({ type: 'decrement'})}>quitar</button>
            </div>
        </>
    )
}

export default Reducer