import React from "react";
import { Outlet, Link } from "react-router-dom";

function Layout() {
    return (   
        <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/table">Table</Link></li>
            <li><Link to="/cards">Cards</Link></li>          
            <li><Link to="/detail/:id">Detail</Link></li>
          </ul>
        </nav>
        <Outlet />
        </div>
    ) ;
  }

export default Layout;
  
  