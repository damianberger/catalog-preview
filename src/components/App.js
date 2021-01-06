import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import Navigation from "./Navigation";
import ProductList from "./ProductList";
import Product from "./Product";

import '../styles/App.css';

const App = () => {

    return (
        <Router>
            <Navigation/>
            <div className="App">
                <Switch>
                    <Route path="/catalog-preview/products" component={ProductList}/>
                    <Route path="/catalog-preview/product/:id" component={Product} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
