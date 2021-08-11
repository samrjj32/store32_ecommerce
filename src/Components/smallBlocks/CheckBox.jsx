import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import { useState, useEffect } from "react";

function CheckBox(props) {
  //   const [checked, setChecked] = useState(false);

  //   const handleChange = (e) => {
  //     setChecked(e.target.checked);
  //     console.log(e.target.checked, checked);
  //   };

  return (
    <div className="checkbox-sec">
      <Checkbox
        // type={props.type}
        name={props.name}
        value={props.value}
        checked={props.checked}
        onChange={props.handleChange}
        inputProps={{ "aria-label": "primary checkbox" }}
      />

      <p>{props.label}</p>
    </div>
  );
}

export default CheckBox;
