import React from "react";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
}));

function RoundMenu(props) {
  const classes = useStyles();

  const { url, category, subCategory } = props;

  return (
    <div className="round-menu">
      <Avatar alt="Remy Sharp" src={url} className={classes.large} />

      <div className="cat-details">
        <h6 className="cat-name">{category}</h6>
        <span className="cat-content">{subCategory}</span>
      </div>
    </div>
  );
}

export default RoundMenu;
