import React from "react";

function LazyComponent(props) {
  const { url, title } = props;
  return (
    <div
      style={{
        width: "150px",
        padding: "10px",
        // height: "170px",
        background: "bisque",
        marginLeft:"10px",
        marginBottom:"10px"
      }}
    >
      <p>{title}</p>
      <img src={url} style={{width:"100%", maxWidth:"140px"}}></img>
    </div>
  );
}

export default LazyComponent;
