import React from "react";
import { useState, useEffect } from "react";
import Banner from "../Components/Banner";
import Grid from "@material-ui/core/Grid";
import CheckBox from "../Components/smallBlocks/CheckBox";

import ProductSection from "../Components/ProductSection";
import MenuItem from "@material-ui/core/MenuItem";

import { makeStyles, withStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { NavItem } from "react-bootstrap";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Pagination from "../Components/Pagination";

import listOfProducts from "../data";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  MuiSelectselect: {
    color: "black",
  },
  option: {
    padding: "20px",
    borderRadius: 4,
    borderColor: "#80bdff",
    boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
  },
}));

const getUnique = (items, value) => {
  return [...new Set(items.map((item) => item[value]))];
};

function Filter(props) {
  const classes = useStyles();
  const [products, setproducts] = useState(listOfProducts);
  const [sortedproducts, setSortedproducts] = useState(listOfProducts);
  const [filterColors, setFilterColors] = useState([]);
  const [filterSizes, setFilterSizes] = useState([]);
  const [filterFits, setFilterFits] = useState();

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  let colors = getUnique(products, "color");
  let sizes = getUnique(products, "size");
  let fits = getUnique(products, "fit");
  fits = ["all", ...fits];

  const handleClick = (e) => {
    const { name, value } = e.target;
    console.log(name, value);

    if (name === "colors") {
      const currentIndex = filterColors.indexOf(value);
      const newChecked = [...filterColors];

      if (currentIndex === -1) {
        newChecked.push(value);
      } else {
        newChecked.splice(currentIndex, 1);
      }

      setFilterColors(newChecked);
    }

    if (name === "sizes") {
      const currentIndex = filterSizes.indexOf(value);
      const newChecked = [...filterSizes];

      if (currentIndex === -1) {
        newChecked.push(value);
      } else {
        newChecked.splice(currentIndex, 1);
      }

      setFilterSizes(newChecked);
    }

    if (name === "fits") {
      setFilterFits(value);
    }
  };

  useEffect(() => {
    filterProducts();
  }, [filterColors, filterSizes, filterFits]);

  const filterProducts = () => {
    let tempData = [...products];

    if (filterColors.length > 0) {
      tempData = tempData.filter((item) => filterColors.includes(item.color));
    }

    if (filterSizes.length > 0) {
      tempData = tempData.filter((item) => filterSizes.includes(item.size));
    }

    if (filterFits) {
      tempData = tempData.filter((item) => item.fit === filterFits);
    }
    console.log(filterFits, fits, "kopee");

    setSortedproducts(tempData);
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const indexOfLastPage = currentPage * postsPerPage;
  const indexOfFirstPage = indexOfLastPage - postsPerPage;

  const currentProducts = sortedproducts.slice(
    indexOfFirstPage,
    indexOfLastPage
  );

  console.log(indexOfLastPage, indexOfFirstPage, currentPage);

  return (
    <div className="filter-section">
      <Grid container>
        <Grid item xs={12} sm={4} flex-direction="column">
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>color</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div className="nav-filter">
                {colors.map((item, i) => {
                  const check = filterColors.includes(item) ? true : false;
                  console.log(check, filterColors);
                  return (
                    <CheckBox
                      checked={check}
                      key={i}
                      name="colors"
                      value={item}
                      handleChange={(e) => handleClick(e, i)}
                      label={item}
                    />
                  );
                })}
              </div>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>size</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div className="nav-filter">
                {sizes.map((item, i) => {
                  const check = filterSizes.includes(item) ? true : false;
                  return (
                    <CheckBox
                      checked={check}
                      name="sizes"
                      key={i}
                      value={item}
                      handleChange={(e) => handleClick(e, i)}
                      label={item}
                    />
                  );
                })}
              </div>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>Fits</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <FormControl className={classes.formControl}>
                <InputLabel htmlFor="age-native-simple"></InputLabel>
                <Select
                  className={classes.MuiSelectselect}
                  native
                  value={filterFits}
                  onChange={(e) => handleClick(e)}
                  name="fits"
                >
                  {fits.map((item, i) => {
                    return (
                      <option key={i} className={classes.option} value={item}>
                        {item}
                      </option>
                    );
                  })}
                </Select>
              </FormControl>
            </AccordionDetails>
          </Accordion>
        </Grid>

        <Grid item xs={12} sm={8} spacing={2}>
          <div className="product-sec">
            <Banner
              bannerStyle={{
                background:
                  "url(https://images.pexels.com/photos/4646814/pexels-photo-4646814.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)",
                height: "150px",
              }}
              headingStyle={{ fontSize: "10px" }}
              subHeadingStyle={{ fontSize: "20px" }}
              heading=""
              subHeading="Keep calm & love rainy days!"
              color="white"
            />
            <div className="filter-details">
              <div className="heading-section">
                <h1> TANKS </h1>
                <p>{sortedproducts.length} Items</p>
              </div>
              Sleeveless vests and tanks for basic dressing. Renew your staples
              from our wide selection – from classic black and white styles to
              new patterns and prints.
            </div>
            <ProductSection
              data={currentProducts}
              type="all"
              style={{
                width: "150px",
              }}
            />
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          container
          direction="row"
          justifyContent="center"
        >
          <Pagination
            postPerPage={postsPerPage}
            totalPost={sortedproducts.length}
            paginate={paginate}
            currentPage={currentPage}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default Filter;
