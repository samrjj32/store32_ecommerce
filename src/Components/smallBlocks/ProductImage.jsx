import React from "react";
import { Link } from "react-router-dom";

function ProductImage(props) {
  const { heading, price, id, url, style = {} } = props;
  return (
    <div className="product_Image" style={style}>
      <Link to={`/product/${109}`}>
        <img src={url}></img>
      </Link>
    </div>
  );
}

export default ProductImage;
