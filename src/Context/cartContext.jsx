import React, { createContext, useState } from "react";

export const AddToCartContext = createContext();

function CartProvider(props) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (data) => {
    console.log(data, "here at context");

    setCartItems((prev) => [...prev, data]);
  };

  return (
    <AddToCartContext.Provider
      value={{
        cartItems,
        addToCart,
      }}
    >
      {props.children}
    </AddToCartContext.Provider>
  );
}

export default CartProvider;
