import React, {useState, useEffect} from 'react';
import ItemList from './ItemList/ItemList';
import { allItem, itemCat } from '../../lib/firebaseConfig';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
        
        const [productos, setProductos] = useState([])
        const[cargando, setCargando] = useState(true)
        const {categoriaId} = useParams();
        

    useEffect(() =>{
        if (categoriaId != null){
                const items=itemCat(categoriaId)
                items.then((data) => {
                        const itemsAux =[]
                        data.forEach(item => {
                            itemsAux.push({id:item.id, nombre:item.data().nombre, desc:item.data().desc, precio:item.data().precio, stock:item.data().stock, imagen:item.data().imagen })    
                        });
                        setProductos(itemsAux)
                        setCargando(false)
                })
        } else {
                const items=allItem()
                items.then((data) => {
                        const itemsAux =[]
                        data.forEach(item => {
                            itemsAux.push({id:item.id, nombre:item.data().nombre, desc:item.data().desc, precio:item.data().precio, stock:item.data().stock, imagen:item.data().imagen })    
                        });
                        setProductos(itemsAux)
                        setCargando(false)
                })
        }
      }, [categoriaId]);
    return(
            <div>
                    <h1 className= 'text-center underline uppercase'>{categoriaId}</h1>
                    <div className='grid grid-flow-row grid-rows-2 grid-cols-3 gap-1'>
                            {cargando ? <h2>Cargando productos...</h2> : <ItemList productos={productos}/>}
                    </div> 
            </div>
    )
}

export default ItemListContainer;
