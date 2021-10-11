import React from 'react';
import './App.css';
import { Navbar } from './Components/Navbar';
import { Layout } from './Components/Layout';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Layout>
        <div>
          Saludos Coder!
           </div>
      </Layout>
    </div>
  );
}

export default App;