import React from "react";
import Trending from "../Components/Trending";
import ProductSection from "../Components/ProductSection";
import Banner from "../Components/Banner";

import Grid from "@material-ui/core/Grid";
import listOfProducts from "../data";

function Home() {
  return (
    <div className="layout">
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={10} sm={10}>
          <Banner
            headingStyle={{ fontSize: 28 }}
            subHeadingStyle={{ fontSize: 90 }}
            button={true}
          />
        </Grid>
      </Grid>
      <Trending />
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={10} sm={10}>
          <Banner
            bannerStyle={{
              background:
                "url(https://images.pexels.com/photos/8498322/pexels-photo-8498322.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)",
              height: "150px",
            }}
            headingStyle={{ fontSize: "10px" }}
            subHeadingStyle={{ fontSize: "20px" }}
            heading=""
            subHeading="Keep calm & love rainy days!"
          />
        </Grid>
      </Grid>
      <ProductSection 
      data={listOfProducts}
      type={"women"}
      />
            <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={10} sm={10}>
          <Banner
            bannerStyle={{
              background:
                "url(https://images.pexels.com/photos/6976102/pexels-photo-6976102.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)",
              height: "150px",
            }}
            headingStyle={{ fontSize: "10px" }}
            subHeadingStyle={{ fontSize: "20px" }}
            heading=""
            subHeading="Keep calm & love rainy days!"
          />
        </Grid>
      </Grid>
      <ProductSection 
      data={listOfProducts}
      type={"men"}
      />
    </div>
  );
}

export default Home;


let data = [
  {
    heading: "Round-neck T-shirt Regular Fit",
    price: "Rs.399",
    url: "https://images.pexels.com/photos/5119529/pexels-photo-5119529.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    heading: "Round-neck T-shirt Regular Fit",
    price: "Rs.399",
    url: "https://images.pexels.com/photos/5119529/pexels-photo-5119529.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    heading: "Round-neck T-shirt Regular Fit",
    price: "Rs.399",
    url: "https://images.pexels.com/photos/5119529/pexels-photo-5119529.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    heading: "Round-neck T-shirt Regular Fit",
    price: "Rs.399",
    url: "https://images.pexels.com/photos/5119529/pexels-photo-5119529.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    heading: "Round-neck T-shirt Regular Fit",
    price: "Rs.399",
    url: "https://images.pexels.com/photos/5119529/pexels-photo-5119529.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    heading: "Round-neck T-shirt Regular Fit",
    price: "Rs.399",
    url: "https://images.pexels.com/photos/5119529/pexels-photo-5119529.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    heading: "Round-neck T-shirt Regular Fit",
    price: "Rs.399",
    url: "https://images.pexels.com/photos/5119529/pexels-photo-5119529.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    heading: "Round-neck T-shirt Regular Fit",
    price: "Rs.399",
    url: "https://images.pexels.com/photos/5119529/pexels-photo-5119529.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
];