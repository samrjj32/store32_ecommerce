import React from "react";
import RoundImage from "./Blocks/RoundMenu";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import { propTypes } from "react-bootstrap/esm/Image";

function Trending(props) {
  console.log("trending component");

  return (
    // <Grid container >
    <div className="trending-section">
      <p>Trending right Now</p>

      <div className="trending-category">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          {data.map((item, i) => {
            return (
              <Link to="/filter"  key={i}>
                <Grid item>
                  <RoundImage
                   
                    url={item.url}
                    category={item.name}
                    subCategory={item.category}
                  />
                </Grid>
              </Link>
            );
          })}
        </Grid>
      </div>
    </div>
    // </Grid>
  );
}

export default React.memo(Trending);

let data = [
  {
    name: "men",
    category: "cloths",
    url: "https://images.pexels.com/photos/3193731/pexels-photo-3193731.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    name: "women",
    category: "cloths",
    url: "https://images.pexels.com/photos/4132651/pexels-photo-4132651.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    name: "kids",
    category: "cloths",
    url: "https://images.pexels.com/photos/969373/pexels-photo-969373.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    name: "men",
    category: "shoes",
    url: "https://images.pexels.com/photos/3261068/pexels-photo-3261068.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    name: "women",
    category: "shoes",
    url: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    name: "kids",
    category: "shoes",
    url: "https://images.pexels.com/photos/5623674/pexels-photo-5623674.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    name: "men",
    category: "T-sgirts",
    url: "https://images.pexels.com/photos/4066288/pexels-photo-4066288.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    name: "men",
    category: "cloths",
    url: "https://images.pexels.com/photos/3193731/pexels-photo-3193731.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
];
