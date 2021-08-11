import React from "react";

function Thumbnails(props) {
  const { url } = props;

  return (
    <div className="thumb">
      <img src={url}></img>
    </div>
  );
}

export default Thumbnails;
