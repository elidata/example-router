import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { getAuth } from 'firebase/auth';
import {app} from "./firebase" ;
import ProductCards from './pages/ProductCards';


const auth = getAuth(app); // get the Auth instance from the app 



function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // User is logged in
        console.log(authUser);
        setUser(authUser);
      } else {
        // User is logged out
        setUser(null);
      }
    });

    return unsubscribe;
  }, []);

  return (
      <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Outlet/>}>
              <Route index element={<h1>HELLO index</h1>} />
              <Route path="table" element={<h1>HELLO sign_in</h1>} />
              <Route path="cards" element={<ProductCards/>} />
              <Route path="detail/:id" element={<h1>Hello id</h1>} />
              <Route path="*" element={<h1>Hello *</h1>} />
            </Route>  
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
