import React from 'react';
import './index.css';
import NavBar from './Components/NavBar';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import ItemListContainer from './Components/Container/ItemListContainer';
import ItemDetailContainer from  './Components/Container/ItemDetailContainer/ItemDetailContainer';
import {CartFuncion} from './Components/context/CartContext'
import Cart from './Components/Cart/Cart';
import FormBuy from './Components/FormBuy/FormBuy';
import 'notyf/notyf.min.css';

function App() {
    return (
        <>
            <BrowserRouter>
            <CartFuncion>
                <NavBar/>
                <Switch>
                    <Route exact path = '/'>
                        <ItemListContainer/>
                    </Route>
                    <Route exact path = '/cart'>
                    <Cart/>
                    </Route>
                    <Route exact path = '/categoria/:categoriaId'>
                    <ItemListContainer greeting={'Categoria'} />
                    </Route>
                    <Route exact path="/item/:id">
                    <ItemDetailContainer/>
                    </Route>
                    <Route exact path = '/formBuy'>
                    <FormBuy/>
                    </Route>
                    <Route exact path = '*'>
                        <Redirect to='/' />
                    </Route>
                </Switch>
                </CartFuncion>
            </BrowserRouter>    
        </>
    );
}

export default App;