import React from "react";
import ProductImage from "./smallBlocks/ProductImage";
import FavoriteIcon from "@material-ui/icons/Favorite";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";

function CartItem(props) {
  return (
    <div className="cart-item">
      <div className="details">
        <ProductImage url={props.data.url} />

        <div className="details-section">
          <p>{props.data.heading}</p>
          <span>${props.data.price}</span>
          <ul className="in-details">
            <li>
              <span>Fit:</span>
              <span>{props.data.fit}</span>
            </li>
            <li>
              <span>Color:</span>
              <span>{props.data.black}</span>
            </li>

            <li>
              <span>Size:</span>
              <span>{props.data.size}</span>
            </li>

            <li>
              <span>Total:</span>
              <span>${props.data.price}</span>
            </li>
          </ul>
          <div className="cart-selections">
            <FavoriteIcon style={{ color: "grey" }} />
          </div>
        </div>
      </div>

      <DeleteOutlineIcon />
    </div>
  );
}

export default CartItem;
