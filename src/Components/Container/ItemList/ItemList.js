import React from 'react'
import Item from './Item/Item'

const ItemList = ({productos}) => {
    return (
        <>
          {productos.map((producto) =>
            <Item key={producto.id} nombre={producto.nombre} desc={producto.desc} precio={producto.precio} imagen={producto.imagen}/>
          )}  
        </>
    )
}

export default ItemList;