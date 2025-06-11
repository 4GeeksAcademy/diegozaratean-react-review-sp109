import React, { useState } from "react";

const Form = ()=>{

    const [firstName, setFirstname] = useState('kaney')
    const [lastName, setLastname] = useState('snow')

   
    return(
        <>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">nombre</label>
                <input type="text" value={firstName} onChange={  (e)=>setFirstname(e.target.value)} className="form-control" id="name"  />
            </div>
             <div className="mb-3">
                <label htmlFor="lastname" className="form-label">apellido</label>
                <input type="text" value={lastName} onChange={ (e)=>setLastname(e.target.value) } className="form-control" id="lastname" placeholder="ingresa tu apellido" />
            </div>
            <p>Tu nombre completo es : {firstName}  {lastName}</p>
           
        </>
    )
}

export default Form