import React from 'react';
import { CartWidget } from './CartWidget';

export const Navbar = () => {
    return (
        <header>
            <nav className="flex justify-between items-center h-16 bg-gray-700 text-white relative shadow-sm"> 
                <img src="img/compumax_logo.png" alt="logo" className= "w-40 h-12 p-2.5"/>
                    

                    <div className="flex mt-1 ml-2.5 mr-5 ">
                        <p className= "p-3">Notebooks</p>
                        <p className= "p-3">Pc Armadas</p>
                        <p className= "p-3">Hardware</p>
                        <p className= "p-3">Perifericos</p>
                        <p className= "p-3">Contactos</p>                
                        <CartWidget/>
                    </div>
            </nav>
            
        </header>
    );
};

export default Navbar;

