import React, { useEffect, useState,lazy, Suspense } from "react";
import axios from "axios";

// import LazyComponent from "../Components/lazyComponent";

const LazyComponent = lazy(() => import("../Components/lazyComponent"));

const YOUR_ACCESS_KEY = "T0TIhVIcTabEfvUM_tKiLugxhqm97fihxnWi1IAw0o0";

// "https://api.unsplash.com/photos/random/?count="+numberOfPhotos +"&client_id=" +clientID;

function LazyTest() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`https://api.unsplash.com/photos/?client_id=${YOUR_ACCESS_KEY}`)
      .then((res) => {
        setData(res.data);
        // console.log(res.data);
      });
  }, []);

  return (
    <div>
      <Suspense  fallback={<div>Loading...</div>}>
        <div style={{ textAlign: "center" }}>
          <span style={{ marginLeft: "" }}>main section</span>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            {data.map((item) => {
              return (
                <LazyComponent
                  url={item.urls.regular}
                  title={item.alt_description}
                />
              );
            })}
          </div>
        </div>
     
    
      <div style={{ textAlign: "center" }}>
        <span style={{ marginLeft: "" }}>main section</span>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <LazyComponent
            url="https://images.pexels.com/photos/8498322/pexels-photo-8498322.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            title="heyeye"
          />
          <LazyComponent
            url="https://images.pexels.com/photos/8498322/pexels-photo-8498322.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            title="heyeye"
          />
          <LazyComponent
            url="https://images.pexels.com/photos/8498322/pexels-photo-8498322.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            title="heyeye"
          />
          <LazyComponent
            url="https://images.pexels.com/photos/8498322/pexels-photo-8498322.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            title="heyeye"
          />
        </div>
      </div>
      </Suspense>
    </div>
  );
}

export default LazyTest;
