import React, {useState, useEffect} from 'react';
import ItemList from './ItemList/ItemList';
import data from '../../Data/Data';

const ItemListContainer = (props) => {
        const [productos, setProductos] = useState([])
        const[cargando, setCargando] = useState(true)

    useEffect(() =>{
            const listaDeProductos = new Promise((res,rej) =>{
                setTimeout(()=>{
                    res(data)
                    rej("Error en carga de items")
                },3000)
            })
            listaDeProductos.then((data)=>{
                setProductos(data)
                setCargando(false)
            }).catch((error) =>{
                console.log("error!: "+ error)
            })
        },[])
    return(
            <div>
                    <h1>{props.titulo}</h1>
                    <div className='grid grid-flow-row grid-rows-2 grid-cols-3 gap-1'>
                            {cargando ? <h2>Cargando productos...</h2> : <ItemList productos={productos}/>}
                    </div> 
            </div>
    )
}

export default ItemListContainer;