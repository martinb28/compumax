import React, {useState, useEffect} from 'react';
import ItemList from './ItemList/ItemList';
import  db from '../../lib/firebaseConfig';
import { collection, query, where, getDocs  } from 'firebase/firestore';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
        
        const [productos, setProductos] = useState([])
        const[cargando, setCargando] = useState(true)
        const {categoriaId} = useParams();
        

    useEffect(() =>{
        setCargando(false)
        
        const misItems = categoriaId ? 
        query(collection(db, 'Productos'), where ('categoria', "==", categoriaId))
        :
        collection(db, 'Productos')
        ;

        getDocs(misItems).then(res => {
                const resultado = res.docs.map(doc =>{
                        return{...doc.data(), id:doc.id}
                })
                setProductos(resultado)
        }).finally(()=> setCargando(false));
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
