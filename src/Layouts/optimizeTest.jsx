import React, { useState, useEffect, useMemo, useCallback } from "react";
import Trending from "../Components/Trending";

function OptimizeTest() {
  const [count, setCount] = useState(0);
  const [addCount, setAddCount] = useState(0);

  const [newCount, setNewCount] = useState(0);


  //   const memoizedvalue = useMemo(() => {
  //     return sqr(count);
  //   }, [count]);

  //   function sqr(num) {
  //     console.log(" click me function component");
  //     return Math.pow(num, 2);
  //   }

  //   const add = () => {
  //     setCount((prev) => prev + 1);
  //   };

  //   const addMe = () => {
  //     console.log("add me component");
  //     setAddCount((prev) => prev + 1);
  //   };

  // checking referential equality.....

  // problem is  when we have an obj or array...
  //every time app re-render it creates new reference  of that obj some where in memory

  //with useMemo it will check both new refrence obj and old obj...
  //and it compare the value inside the obj is change or not
  // then only we need to update component

  // here we are checking the old obj themes with old theme with new theme obj
  // with useMemo() .. we are wrapping the theme obj inside memoizing function
  // that means if the value inside does'nt changed we dont re-update out theme style obj
  //by this method we got the exact same referance as we had the previous render

  //   const theme = useMemo(() => {
  //     return {
  //       backgroundColor: memoizedvalue ? "red" : "black",
  //       color: memoizedvalue ? "black" : "white",
  //       width: "200px",
  //       height: "300px",
  //     };
  //   }, [memoizedvalue]);

  //   useEffect(() => {
  //     console.log( "theme is changing");
  //   }, [theme]);

  const getItems = useCallback(
    (num) => {
      console.log("hmmm");
      return count * num;
    },
    [count]
  );

  useEffect(() => {
    setAddCount(getItems(5));
  }, [getItems]);

  const add = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div>
      {/* <h1>{addCount}</h1>
      <button onClick={addMe}>add me</button>

      <Trending count={memoizedvalue} />
      <button onClick={add}>click me</button>
      <div style={theme}>hey</div> */}

      <button onClick={add}>hello</button>
      <div>hey {count}</div>

      <div>callbackkk {addCount}</div>

      <button onClick={() => setNewCount((prev) => prev + 1)}>add me</button>
      <div>hhaha {newCount}</div>
    </div>
  );
}

export default OptimizeTest;
