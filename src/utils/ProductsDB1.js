import {useState, createContext}  from 'react';
const DBContext = createContext();
const ProductValues =  [
        {"id":1,"name":"Apples","PPU":100,"stock":100},
        {"id":2,"name":"COrnflakes", "PPU":1400, stock:10}
        ] ;

export default class  ProductsDB {

    products = { "products": [...ProductValues] } ;

    insert(p) {
        products = { "products": [p,...Products.products]} ;
    }
    
    get(pid) {
        
        prod = products.products.find("id" === pid) ;
        console.log (prod.name) ;
        return prod ;
    }
    getAll() {

        return this.products.products;
    }
}

