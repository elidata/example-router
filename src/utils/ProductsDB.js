import {useState, createContext}  from 'react';
const DBContext = createContext;

const ProductValues =  [
{"id":1,"name":"Apples","PPU":100,"stock":100},
{"id":2,"name":"COrnflakes", "PPU":1400, stock:10}
] ;

const products = { "products": [...ProductValues] } ;
export default Products ;

