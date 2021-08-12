import React, { useEffect, useState, useContext } from "react";
import Grid from "@material-ui/core/Grid";
import Thumbnails from "../Components/Thumbnails";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";
import Select from "@material-ui/core/Select";

import { AddToCartContext } from "../Context/cartContext";

import listOfProducts from "../data";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const getDetails = (id) => {
  let list = [...listOfProducts];

  // console.log(id, list);
  const Details = list.find((item) => item.id == id);
  return Details;
};

function ProductDetails(props) {
  const cartValue = useContext(AddToCartContext);

  const classes = useStyles();
  const [slug, setSlug] = useState(props.match.params.id);
  const [details, setDetails] = useState({});
  const [selectedSize, setselectedSize] = useState();

  useEffect(() => {
    setDetails(getDetails(slug));
  }, []);

  let sizes = details.sizes;

  console.log(cartValue, "sss");

  const handleSelectSize = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setselectedSize(value);
  };

  const saveToCart = () => {
    let obj = details;
    obj = { ...obj, size: selectedSize };
    cartValue.addToCart(obj);
  };

  return (
    <div className="product-details">
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid
          item
          container
          xs={8}
          sm={8}
          md={6}
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <div className="big-img">
            <img src={details.url}></img>
          </div>
        </Grid>
        <Grid item xs={6} sm={4} md={4}>
          <div>
            <p> {details.heading} </p>
            <p> ₹ {details.price}</p>

            <Grid item xs={12} sm={8} md={12}>
              <h6> {details.description}</h6>
            </Grid>

            <div className="thumb-nails">
              <Grid
                container
                direction="row"
                justifyContent="end"
                alignItems="center"
                spacing={5}
              >
                {[
                  details.url,
                  details.url,
                  details.url,
                  details.url,
                  details.url,
                ].map((item, i) => {
                  return (
                    // <Grid item xs={2} sm={2} md={2}>
                      <Thumbnails key={i} url={item} />
                    // </Grid>
                  );
                })}
              </Grid>
            </div>
            <div className="select-size">
              <FormControl className={classes.formControl}>
                <InputLabel htmlFor="age-native-simple"></InputLabel>
                <Select
                  className={classes.MuiSelectselect}
                  native
                  value={""}
                  onChange={(e) => handleSelectSize(e)}
                  // onChange={(e) => handleClick(e)}
                  name="size"
                >
                  <option className={classes.option} value={"all"}>
                    Select size
                  </option>
                  {sizes &&
                    sizes.map((item, i) => {
                      console.log(item);
                      return (
                        <option key={i} className={classes.option} value={item}>
                          {item}
                        </option>
                      );
                    })}
                </Select>
              </FormControl>
            </div>

            <div className="cart-btn" onClick={saveToCart}>
              <p>ADD TO Cart</p>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default ProductDetails;

let thumbData = [
  {
    id: "1",
    url: "https://images.pexels.com/photos/5119529/pexels-photo-5119529.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    id: "1",
    url: "https://images.pexels.com/photos/5119529/pexels-photo-5119529.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    id: "1",
    url: "https://images.pexels.com/photos/5119529/pexels-photo-5119529.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    id: "1",
    url: "https://images.pexels.com/photos/5119529/pexels-photo-5119529.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    id: "1",
    url: "https://images.pexels.com/photos/5119529/pexels-photo-5119529.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
];
