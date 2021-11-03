import React from 'react';
import { CartWidget } from './CartWidget';
import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <header>
            <nav className="flex justify-between items-center h-16 bg-gray-700 text-white relative shadow-sm"> 
                <Link to= "/"><img src="img/compumax_logo.png" alt="logo" className= "w-40 h-12 p-2.5"/></Link>
                    

                    <div className="flex mt-1 ml-2.5 mr-5 ">
                        <Link to="/categoria/notebooks"className= "p-3">Notebooks</Link>
                        <Link to="/categoria/pcarmadas"className= "p-3">Pc Armadas</Link>
                        <Link to="/categoria/hardware"className= "p-3">Hardware</Link>
                        <Link to="/categoria/perifericos"className= "p-3">Perifericos</Link>
                        <Link to="/categoria/gabinetes"className= "p-3">Gabinetes</Link>                
                        <CartWidget />
                    </div>
            </nav>
            
        </header>
    );
};

export default Navbar;

