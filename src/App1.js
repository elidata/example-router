import logo from './logo.svg';
import './App.css';
import Login from './pages/Login' ;
import ProductCards from './pages/ProductCards';
import ProductDetail from './pages/ProductDetail';
import ProductTable from './pages/ProductTable';
import Layout from './pages/Layout' ;
import { BrowserRouter, Routes, Route } from "react-router-dom";
const ProductsDB=require('./utils/ProductsDB.js') ;

var db = new ProductsDB()  ;


function App1() {
      const  NoPage = (<div> Page Not Found" </div>);
   
      alert("db is ", db.length() );
      return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Login />} />
            <Route path="table" element={<ProductTable />} />
            <Route path="cards" element={<ProductCards />} />
            <Route path="table/detail/:id" element={<ProductDetail/>} />
            <Route path="cards/detail/:id" element={<ProductDetail/>} />
            <Route path="*" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
