import React from 'react'
import {NavLink} from "react-router-dom";

import stars from '../img/stars.png'
import ratingFill from '../img/ratingFill.png';
import mini from '../img/1_mini.jpg'

const ProductMini = ({name, rating, id}) => {

    const URL = `/catalog-preview/product/${id}`

    return (
        <NavLink to={URL} className={`productMini`}>
            <h1>{name}</h1>
            <h1>{Math.round(rating * 100) / 100}</h1>
            <div className="ratingAnchor">
                <img className="fillMeter" width={rating*50} height={53} src={ratingFill} alt={'img'}/>
                <img className="starRating" src={stars} alt={'img'}/>
            </div>
            <img src={mini} alt={'img'}/>
        </NavLink>
    )
}

export default ProductMini;
