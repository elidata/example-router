import React from "react";
function Card(props) {
    return (
        
    )
}

function ProductCards(props) {

    var prod = Products.products ; // an array

    return (
        <div>
            Product Table (found {prod.length} rows)
            <ul>{prod.map((p) => <li key={p.id}><Link to={`detail/${p.id}`}> {p.name} {p.PPU}</Link> </li>)}</ul>
        </div>
    )
}

export default ProductCards ;