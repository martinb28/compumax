import React from 'react'

const Item = ({nombre, desc, precio, imagen}) => {
    return(
    <div class="max-w-md flex rounded flex-wrap overflow-hidden shadow-sm">
        <img class="w-40 h-40"src={imagen} alt = {nombre}/>
        <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">{nombre}</div>
                <p class="text-gray-700 text-base">{desc}</p>
            </div>
        <div class="px-6 pt-4 pb-2">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">${precio}</span>    
        </div>
    </div>
    )
}

export default Item;