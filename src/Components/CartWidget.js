import React, {useContext} from 'react';
import {Context} from "../Components/context/CartContext";


export const CartWidget = () => {
    const {unidades} = useContext(Context)
    

    return (
        <div>
            <img className="w-6 h-6 p-px mr-20 mt-3" src= "/img/cart.png" alt= "cart"/>
            <p className = "bg-green-400 border-green-400 rounded-full mr-12 text-center p-0">{unidades ? <p>{unidades}</p>: ''}</p>
        </div>
    )
}


