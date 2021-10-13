import React from 'react';
import { CartWidget } from './CartWidget';

export const Navbar = () => {
    return (
        <header className="header">
            <img src="img/compumax_logo.png" alt="logo" className= "logo"/>
            <nav className="navbar">                
                <p className = "item-nav">Notebooks</p>
                <p className = "item-nav">Pc Armadas</p>
                <p className = "item-nav">Hardware</p>
                <p className = "item-nav">Perifericos</p>
                <p className = "item-nav">Contactos</p>
            </nav>
            <CartWidget/>
        </header>
    );
};

export default Navbar;

