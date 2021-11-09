import React, { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import Data from '../../../Data/Data';
import { useParams } from 'react-router-dom';

export const ItemDetailContainer = () => {
  const [productos, setProductos] = useState({});
  const [cargando, setCargando] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    setCargando(true);
    const getItems = new Promise((resolve) => {
      setTimeout(() => {
        resolve(Data);
      }, 1000);
    });

    getItems
      .then((res) => {
        setProductos(res.find((i) => i.id === id));
      })
      .finally(() => setCargando(false));
  }, [id]);

  return cargando ? <h3>Cargando...</h3> : <ItemDetail {...productos} />;
};

export default ItemDetailContainer;