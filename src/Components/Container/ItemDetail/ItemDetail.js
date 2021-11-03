import React from 'react';


export const ItemDetail = ({ id, nombre, imagen, desc,precio }) => {
  return !id ? (
    <h1>EL ITEM NO EXISTE</h1>
  ) : (
    <>
      <h1>{nombre}</h1>
      <img src={imagen} alt={nombre} />
      <p>{desc}</p>
      <p>$ {precio}</p>
    </>
  );
};
export default ItemDetail;