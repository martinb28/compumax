import React from 'react';
import './index.css';
import NavBar from './Components/NavBar';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import ItemListContainer from './Components/Container/ItemListContainer';
import ItemDetailContainer from  './Components/Container/ItemDetailContainer/ItemDetailContainer';

function App() {
    return (
        <>
            <BrowserRouter>
                <NavBar/>
                <Switch>
                    <Route exact path = '/'>
                        <ItemListContainer/>
                    </Route>
                    <Route exact path = '/categoria/:categoriaId'>
                    <ItemListContainer greeting={'Categoria'} />
                    </Route>
                    <Route path="/item/:id" component={ItemDetailContainer} />
                    <Route exact path = '*'>
                        <Redirect to='/' />
                    </Route>
                </Switch>
            </BrowserRouter>    
        </>
    );
}

export default App;