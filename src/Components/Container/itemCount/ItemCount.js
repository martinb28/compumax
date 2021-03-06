
import React, {useState, useContext} from "react";
import NotyfContext from '../../../NotyfContext';

const ItemCount = (props) => {

    const [stock, setStock] = useState(props.stock)
    const [unidades, setUnidades] = useState(1)
    const notyf = useContext(NotyfContext);

    const handleStock = {
        sumaStock:()=>{
            if (stock===0){
                notyf.error('No hay stock disponible')
            } else{
                setUnidades(unidades + 1)
                setStock(stock - 1)
            }
        },

        restaStock:()=>{
            if (unidades===1){
                notyf.error('Cantidad incorrecta')
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
                <button onClick = {handleStock.restaStock} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">-</button>
                <button onClick = {handleStock.sumaStock} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" >+</button>
            </div>
            <div>
                <p>Stock disponible {stock}</p>
            </div>
            <div>
                <button onClick = {() => props.onAdd({unidades})}className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount