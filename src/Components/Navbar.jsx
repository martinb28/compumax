import React from 'react';

export const Navbar = () => {
    return (
        <header className="header">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Compumax_logo.svg/1200px-Compumax_logo.svg.png" alt="logo" className= "logo"/>
            <nav className="navbar">                
                <p className = "item-nav">Notebooks</p>
                <p className = "item-nav">Pc Armadas</p>
                <p className = "item-nav">Hardware</p>
                <p className = "item-nav">Perifericos</p>
                <p className = "item-nav">Contactos</p>
            </nav>
        </header>
    );
};

export default Navbar;

