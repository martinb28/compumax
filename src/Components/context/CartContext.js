import React, {useState} from "react";

const Context = React.createContext()

const CartFuncion = ({children}) =>{
    const [cart, setCart] = useState([])
    const [unidades, setUnidades] = useState(0)
    const [total, setTotal] = useState(0)

    const onAdd = (producto, cantidad) => {
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
    
    const quitarItem =(element) =>{
        let product = cart.filter(item => item.id === element)
        setTotal(total - product[0].precio)
        setCart(cart.filter(item => item.id !== element))
        setUnidades(unidades - 1)
    }

    const vaciarCarro = () =>{
        setCart([])
        setTotal(0)
        setUnidades(0)
    }

    return <Context.Provider value={{cart, unidades, total, onAdd, quitarItem, vaciarCarro}}>
     {children}
    </Context.Provider>
}

export {CartFuncion, Context}