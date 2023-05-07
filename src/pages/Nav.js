import Login from './Login' ;
import ProductCards from './ProductCards';
import ProductDetail from './ProductDetail';
import ProductTable from './ProductTable';
import Layout from './Layout' ;
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Nav(props) {

  const  NoPage = (<div> Page Not Found" </div>);

    return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Login />} />
          <Route path="table" element={<ProductTable />} />
          <Route path="cards" element={<ProductCards />} />
          <Route path="detail" element={<ProductDetail/>} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Nav ;