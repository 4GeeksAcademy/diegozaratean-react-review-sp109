import React, { useState } from "react";

const Cart = ({quantity = 0 })=>{
    //AQUI
    const [total,setTotal] = useState(quantity)
    const [userItems,setUserItems] = useState(1)


    function agregar(){
        console.log('agregar')
        setTotal(total + userItems)
    }

    function quitaruserItems(){
        if(userItems > 1){
            setUserItems( userItems - 1)
        }
    }


    return(
        <>        
            <div className="text-center mt-5">
                <h4>
                    {total}
                    <i className="bi bi-cart4"></i>
                </h4>
            </div>

            <div className="card" style={{width: "24rem"}}>
                <img src="https://cdn.iconscout.com/icon/free/png-256/free-react-1-282599.png?f=webp&w=256" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Aprende React</h5>
                    <p className="card-text">Libro aprende React , en este libro aprenderas sobre componenentes,class,  props y hooks, especialmente el useState </p>
                    <button onClick={quitaruserItems}>-</button>
                    <input type="number" value={userItems} />
                    <button onClick={()=>setUserItems( userItems + 1)}  >+</button>
                    <a onClick={agregar} href="#" className="btn btn-primary">Agregar al carrito</a>
                </div>
            </div>
            <div className="text-center mt-1">
                <a onClick={ ()=>{setTotal(0)}} href="#" className="btn btn-danger">limpiar al carrito</a>
            </div>
        </>
    )
}

export default Cart