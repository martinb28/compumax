import React from 'react';
import './index.css';
import { Navbar } from './Components/Navbar';
import { ItemListContainer } from './Components/Container/ItemListContainer';

function App() {
  return (
    <>
      <Navbar/>
      <ItemListContainer>
        ¡Bienvenidos a CompuMax!
      </ItemListContainer> 
      </>
  );
}

export default App;