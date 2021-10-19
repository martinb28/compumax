import React from 'react'

const Item = ({nombre, desc, precio, imagen}) => {
    return (
        <div>
            <h2>{nombre}</h2>
            <h2>{desc}</h2>
            <h2>${precio}</h2>            
            <img src={imagen} alt = {nombre}/>

        </div>
    )
}

export default Item;