import React, {useState} from 'react'

export default function  contador() {
    const [click, setClick] = useState(0);
    const[date, setDate] = useState()
    
    return (
        <div>
            <h1>Click counter</h1>
            <p>Number of clicks:{click}</p>
            <button onClick={()=>{setClick(click+1)}
        }>Sumar a la cuenta
        </button>
            <p>Date:{date}</p>

        </div>
    )
}
