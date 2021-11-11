
import React, {useState} from "react";

const ItemCount = (props) => {

    const [stock, setStock] = useState(props.stock)
    const [unidades, setUnidades] = useState(0)

    const handleStock = {
        sumaStock:()=>{
            if (stock===0){
                alert('No hay stock disponible')
            } else{
                setUnidades(unidades + 1)
                setStock(stock - 1)
            }
        },

        restaStock:()=>{
            if (unidades===0){
                alert('Cantidad Incorrecta')
            } else{
                setUnidades(unidades - 1)
                setStock(stock + 1)
            }
        }
    }

    


    return(
        <div >
            <div>
                <p>Cantidad: {unidades}</p>
                <button onClick = {handleStock.restaStock} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">-</button>
                <button onClick = {handleStock.sumaStock} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" >+</button>
            </div>
            <div>
                <p>Stock disponible {stock}</p>
            </div>
            <div>
                <button onClick = {() => props.onAdd({unidades})}class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount