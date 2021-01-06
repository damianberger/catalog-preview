import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getProducts} from '../actions/productActions'

import ProductMini from "./ProductMini";
import productsData from "../data/productsData";

const ProductList = () => {
    const [products, setProducts] = useState([]);
    // const dispatch = useDispatch()
    // const productList = useSelector(state => state.productList)
    // const {loading, error, products} = productList
    //
    // useEffect(() => {
    //     dispatch(getProducts())
    // }, [dispatch])

    useEffect(() => {
        setProducts(productsData)
    }, [])


    return (
        <div className="productsList">
            {/*{loading ? "Wczytywanie..." : error ? error.message : products.map((e) =>*/}
            {products.map((e) =>
                <ProductMini
                    key={e.id}
                    name={e.name}
                    rating={e.rating}
                    id={e.id}
                />
            )}
            // )}
        </div>
    );
}
export default ProductList;
