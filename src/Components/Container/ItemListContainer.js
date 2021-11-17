import React, {useState, useEffect} from 'react';
import ItemList from './ItemList/ItemList';
import data from '../../Data/Data';
import { getFirestoreDb } from '../../lib/firebaseConfig';
import { collection, getDocs, where, query } from "firebase/firestore"; //collection, query, getDocs, where
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
        const db = getFirestoreDb()
        const [productos, setProductos] = useState([])
        const[cargando, setCargando] = useState(true)
        const {categoriaId} = useParams();
        

    useEffect(() =>{
        const getProductById = async () => {
            setCargando(false)
            const queryCollection  = query(collection(db, 'products'), where('id', '==', `${categoriaId}`));
            const querySnapshot = await getDocs(queryCollection);
            let aux = {};
            querySnapshot.forEach((doc) => {
              aux = {...doc.data()}
            
            });
            setProductos(aux);
          }
          getProductById();
      }, []);
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
