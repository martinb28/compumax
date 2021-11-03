import React, {useState, useEffect} from 'react';
import ItemList from './ItemList/ItemList';
import data from '../../Data/Data';
import { useParams } from 'react-router-dom';

const ItemListContainer = (props) => {
        const [productos, setProductos] = useState([])
        const[cargando, setCargando] = useState(true)
        const {categoriaId} = useParams();
        

    useEffect(() =>{
            setCargando(true);
            const listaDeProductos = new Promise((res) =>{
                setTimeout(()=>{
                    res(data)                    
                },3000)
            })
            listaDeProductos.then((res)=>{
                categoriaId ? setProductos(res.filter(i => i.categoria === categoriaId)):
                setProductos(res);
                setCargando(false);
            })
        },[categoriaId])
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