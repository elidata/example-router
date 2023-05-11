import React from "react";
function ProductDetail(props) {
    return (
        <div>
            Product Detail for item {props.id}
            prod[id=props.id].name ;
            prod[props.id]
        </div>
    )
}

export default ProductDetail ;