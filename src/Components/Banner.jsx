import React from "react";
import { useState, useEffect } from "react";

function Banner(props) {
  const [modifiedSize, setmodifiedSize] = useState(
    props.subHeadingStyle.fontSize
  );

  useEffect(() => {
    resizeWindow();
    window.addEventListener("resize", resizeWindow);
    return () => window.removeEventListener("resize", resizeWindow);
  }, []);

  let resizeWindow = () => {
    const { innerWidth: width, innerHeight: height } = window;
    let size = width / props.subHeadingStyle.fontSize + 60;
    setmodifiedSize(size);
    // console.log(width, size);
  };

  const {
    bannerStyle = {},
    headingStyle = {},
    subHeadingStyle = {},
    className = "",
    heading = "SALE: Up to 70% off",
    subHeading = "Buy 3 pay for 2",
    button,
    color
  } = props;

  const subHeadingMode = {
    fontSize: `${modifiedSize}px`,
    color:color
  };

  // console.log(modifiedSize, subHeadingMode);
  return (
    <section>
      <div className="banner">
        <div className="banner-content" style={bannerStyle}>
          <div className="banner-details">
            <p style={headingStyle}>{heading}</p>

            <h3 style={subHeadingMode}>{subHeading}</h3>
            {
              button ?
              <div className="banner-button"> buy now</div>
              :
              ""
            }
           
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
