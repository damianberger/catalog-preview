import React, {useEffect, useState,} from 'react'

import {useParams} from "react-router-dom";

import findProduct from "../services/ProductService";
import img1 from '../img/1_1.jpg'
import img2 from '../img/1_2.jpg'
import productsData from "../data/productsData";


const Product = () => {
    const [product, setProduct] = useState();
    const {id} = useParams()

    // useEffect(() => {
    //     findProduct(id).then(
    //         (res) => {
    //             setProduct(res.data)
    //         }).catch(err => {
    //         console.log(err)
    //     })
    // }, [id])

    useEffect(() => {
        setProduct(productsData[id])
    }, [])

    return (
        <div className={`product`}>
            {product ? (
                <div>
                    <h1>Name: {product.name}</h1>
                    <h1>Rating: {product.rating}</h1>
                    <h1>Desc: {product.description}</h1>
                    {/*<img className="productImage"*/}
                    {/*     src={`http://localhost:8080/api/product/image/` + product.id + "?num=1"} alt={'img'}/>*/}
                    {/*<img className="productImage hoverImage"*/}
                    {/*     src={`http://localhost:8080/api/product/image/` + product.id + "?num=2"} alt={'img'}/>*/}
                    <img className="productImage"
                         src={img1} alt={'img'}/>
                    <img className="productImage hoverImage"
                         src={img2} alt={'img'}/>

                </div>
            ) : (
                <h1>Wczytywanie</h1>
            )}
        </div>
    )
}

export default Product;
