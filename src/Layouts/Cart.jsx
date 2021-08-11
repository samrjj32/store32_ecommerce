import React ,{useContext} from "react";
import CartItem from "../Components/CartItem";
import Grid from "@material-ui/core/Grid";
import { AddToCartContext } from "../Context/cartContext";

function Cart() {
  const cartValue = useContext(AddToCartContext);

  return (
    <div className="cart">
      <div className="cart-header">
        <span>Shopping bag</span>
      </div>

      <div className="cart-items">
        <Grid container direction="row" justifyContent="center">
          <Grid item xs={10} sm={7}>
            {cartValue.cartItems.map((item, i) => {
              return <CartItem data={item} />;
            })}
          </Grid>

          <Grid
            item
            xs={12}
            sm={5}
            container
            direction="row"
            justifyContent="center"
            // alignItems="center"
          >
            <div className="cart-rate-section">
              {/* <span>items</span> */}
              <ul className="cart-rate-items">
                <li>
                  <span>Order value:</span>
                  <span>$1200</span>
                </li>
                <li>
                  <span>Delivery:</span>
                  <span>$10</span>
                </li>

                <li>
                  <span>Total:</span>
                  <span>$1210</span>
                </li>
                <div className="cart-purchase-btn">
                  <p>continue to checkout</p>
                </div>
              </ul>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Cart;
