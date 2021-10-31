import React from 'react';
import './index.css';
import NavBar from './Components/NavBar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ItemListContainer from './Components/Container/ItemListContainer';

function App() {
    return (
        <>
            <BrowserRouter>
                <NavBar/>
                <Switch>
                    <Route exact path = '/'>
                        <ItemListContainer/>
                    </Route>
                    <Route exact path = '/Notebooks'>
                        <h1>Notebooks</h1>
                    </Route>
                    <Route exact path = '/Hardware'>
                        <ItemListContainer/>
                    </Route>
                    <Route exact path = '/perifericos'>
                        <ItemListContainer/>
                    </Route>
                </Switch>
            </BrowserRouter>    
        </>
    );
}

export default App;