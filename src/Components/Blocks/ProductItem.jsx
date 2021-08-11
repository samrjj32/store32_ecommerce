import React, { use } from "react";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { Link, useHistory, useLocation } from "react-router-dom";

function ProductItem(props) {
  const { heading, price, id, url, style = {} } = props;

  const history = useHistory();
  const location = useLocation();

  // console.log(location, "mmma");

  return (
    <div className="product_item" style={style}>
      <div className="image-container">
        <Link to={`/product/${id}`}>
          <img src={url}></img>
        </Link>
        <div className="item-button">
          {location.pathname === "/" ? (
            ""
          ) : (
            <button className="favourite">
              <FavoriteIcon style={{ color: "red" }} />
            </button>
          )}
        </div>
      </div>

      <div className="item-details">
        <h5 className="item-heading">{heading}</h5>
        <span>{price} </span>
      </div>
    </div>
  );
}

export default ProductItem;
