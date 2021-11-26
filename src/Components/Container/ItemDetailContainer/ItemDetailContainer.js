import React, { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import  db from '../../../lib/firebaseConfig';
import { doc, getDoc  } from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import { SpinnerDotted } from 'spinners-react';

export const ItemDetailContainer = () => {
  const [productos, setProductos] = useState({});
  const [cargando, setCargando] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    setCargando(true)
    const item = doc(db, 'Productos', id)

    getDoc(item).then(res => {
      const resultado ={id: res.id, ...res.data()};
      setProductos(resultado);
    }).finally (()=>{
      setCargando(false)
    })
  }, [id]);

  return cargando ? <SpinnerDotted className='m-72' size={90} thickness={102} speed={100} color="rgba(58, 57, 172, 1)" /> : <ItemDetail {...productos} />;
};

export default ItemDetailContainer;