import {React, useEffect, useState} from "react";
import {Navigate} from "react-router-dom" ;
import ProductsDB from '../utils/ProductsDB';
//import Card from '@mui/material/Card';
import { getFirestore, collection, getDocs } from "firebase/firestore";
import {app} from "../firebase" ;

const db = getFirestore(app) ;

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
    const [products, setProducts] = useState([]) ;
    const fetchProducts = async () => {
       
        await getDocs(collection(db, "products"))
            .then((querySnapshot)=>{               
                const newData = querySnapshot.docs
                    .map((doc) => ({...doc.data(), id:doc.id }));
                setProducts(newData);                
                console.log(products, newData);
            })
       
    }
   
    useEffect(()=>{
        fetchProducts();
    }, [])

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
    
    return (
                 <div>
                     Product Cards (found {products.length} rows)
                     {products.map((p) => <ProductCard prod={p}/>)}
                 </div>
             )

}

// function ProductCards(props) {

//     var prod = ProductsDB.products ; // an array

//     return (
//         <div>
//             Product Cards (found {prod.length} rows)
//             {prod.map((p) => <ProductCard prod={p}/>)}
//         </div>
//     )
// }

export default ProductCards ;