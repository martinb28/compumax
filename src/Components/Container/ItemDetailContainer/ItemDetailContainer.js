import React, { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import  db from '../../../lib/firebaseConfig';
import { doc, getDoc  } from 'firebase/firestore';
import { useParams } from 'react-router-dom';

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

  return cargando ? <h3>Cargando...</h3> : <ItemDetail {...productos} />;
};

export default ItemDetailContainer;