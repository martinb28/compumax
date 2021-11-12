import React, {useState} from "react";

const Context = React.createContext()

const CartFuncion = ({children}) =>{
    const [cart, setCart] = useState([])
    const [unidades, setUnidades] = useState(0)
    const [total, setTotal] = useState(0)

    const onAdd = (producto, cantidad) => {
        console.log('entre al add')
        const itemExiste = cart.find(item => item.id === producto.id)
        if (!itemExiste){
            setCart([...cart, {id:producto.id, nombre:producto.nombre, precio:producto.precio, cantidad:cantidad, subtotal:(producto.precio * cantidad)}])
            setTotal(total + (producto.precio * cantidad))
            setUnidades(unidades + 1)
        } else {
            const cartAux= cart.map((item) =>{
                if (item.id === producto.id){
                    item.cantidad += cantidad
                    item.subtotal += (producto.precio * cantidad)
                }
                return item
            })
            setCart(cartAux)
            setTotal(total + (producto.precio * cantidad))
        }
    }
    
    const quitarItem =() =>{
        console.log('Entre a quitar item')
        // setCart(cart.filter(item => item.id !== element))
        
    }

    // const vaciarCarro = () =>{
    //     setCart([])
    // }

    return <Context.Provider value={{cart, unidades, total, onAdd, quitarItem}}>
     {children}
    </Context.Provider>
}

export {CartFuncion, Context}