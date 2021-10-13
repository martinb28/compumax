import React from 'react';
import './App.css';
import { Navbar } from './Components/Navbar';
import { ItemListContainer } from './Container/ItemListContainer';

function App() {
  return (
    <>
      <Navbar/>
      <ItemListContainer/>
      </>
  );
}

export default App;