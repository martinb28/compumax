import React, { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { only } from '../../../lib/firebaseConfig';
import { useParams } from 'react-router-dom';

export const ItemDetailContainer = () => {
  const [productos, setProductos] = useState({});
  const [cargando, setCargando] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const item = only(id)
    item.then((data) =>{
      setProductos(data.data())
      setCargando(false)
    })
  }, [id]);

  return cargando ? <h3>Cargando...</h3> : <ItemDetail {...productos} />;
};

export default ItemDetailContainer;