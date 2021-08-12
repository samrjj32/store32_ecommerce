import React, { useEffect, useContext } from "react";
import PermIdentityOutlinedIcon from "@material-ui/icons/PermIdentityOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { Link } from "react-router-dom";

import { AddToCartContext } from "../Context/cartContext";

function Header() {
  const cartValue = useContext(AddToCartContext);

  console.log(cartValue, "hi");

  const showMenu = () => {
    const burger = document.querySelector('.burger-menu');
    const nav = document.querySelector('.nav-bottom');

    burger.addEventListener('click', () => {
      nav.classList.toggle('burger-active');
    });
    console.log(burger)
  };
 
  console.log(document.querySelector('.burger-menu'))

  return (
    <div className="navbar" id="nav">
      <div className="nav-top">
        <div className="nav-left">
        <div className="burger-menu" onClick={showMenu}>
          <div className="one"></div>
          <div className="two"></div>
          <div className="three"></div>
        </div>
          <Link to="/">
            <li>store 32</li>
          </Link>
        </div>

        <div className="nav-right">
          <li>
            <PermIdentityOutlinedIcon />
          </li>
          <li>
            <FavoriteBorderOutlinedIcon />
          </li>
          <li>
            <Link to="/cart">
              <ShoppingCartOutlinedIcon />
            </Link>
            {/* <span className="cart-count">{cartValue.cartItems.length}</span> */}
          </li>
        </div>
      
      </div>
      <div className="nav-bottom">
        <ul>
          <li>
            {" "}
            <span>men</span>
          </li>
          <li>
            <span>women</span>
          </li>
          <li>
            <span>kids</span>
          </li>
          <li>
            <span>sale</span>
          </li>
          <li>
            <span>Divided</span>
          </li>
          <li>
            <span>sustainability</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
