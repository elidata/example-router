import React from "react";
import {Link, Navigate} from "react-router-dom" ;
import Products from '../utils/ProductsDB';
//import Card from '@mui/material/Card';

const  ProductCard = (props) =>{
    let p=props.prod ;
    const gotoDetail = (e) => {
        let path = `/detail/${e.id}` ;
        Navigate(path) ;
    }

    return (
        <button id={p.id} onClick={gotoDetail} colour="red">Hello {p.id} {p.name} {p.PPU} in stock: {p.stock}</button>

    )
}

function ProductCards(props) {

    var prod = Products.products ; // an array

    return (
        <div>
            Product Table (found {prod.length} rows)
            {prod.map((p) => <ProductCard prod={p}/>)}
        </div>
    )
}

export default ProductCards ;