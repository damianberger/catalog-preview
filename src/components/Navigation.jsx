import React, {useState} from 'react';
import {NavLink, Route, Switch} from "react-router-dom";
import ProductList from "./ProductList";
import Product from "./Product";

const Navigation = () => {
    const [showList, setShowList] = useState(0);


    return (
        <div className="navBar">
            <NavLink to={"/catalog-preview/products"} className="navButton">Produkty</NavLink>
        </div>
    )
}
export default Navigation;
