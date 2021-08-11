import React, { useState, useEffect } from "react";
import ProductItem from "./Blocks/ProductItem";
import Grid from "@material-ui/core/Grid";

const getProducts = (items, value) => {
  let data = items.filter((item) => item.cat == value);
  return data;
};

function ProductSection(props) {
  const { data, type } = props;

  const [products, setProducts] = useState([]);

  let catProducts = getProducts(data, type);

  let checkSection = type === "all" ? data : catProducts.slice(0, 4);

  // console.log(checkSection, type);

  // useEffect(() => {
  //   effect
  //   return () => {
  //     cleanup
  //   }
  // }, [input])

  return (
    <div className="product-section">
      {checkSection.length > 0 ? (
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          {checkSection.map((item, i) => {
            // if (props.type === item.cat)
            return (
              <Grid item key={i}>
                <ProductItem
                  id={item.id}
                  heading={item.heading}
                  price={item.price}
                  url={item.url}
                  style={props.style}
                />
              </Grid>
            );
          })}
        </Grid>
      ) : (
        <div className="no-products">
          <span>opps no products available</span>
        </div>
      )}
    </div>
  );
}

export default ProductSection;
