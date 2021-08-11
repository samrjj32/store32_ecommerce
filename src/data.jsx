let listOfProducts = [
  {
    id: 101,
    cat:"women",
    heading: "Round-neck T-shirt Regular Fit",
    price: "Rs.799",
    url: "https://images.pexels.com/photos/5119529/pexels-photo-5119529.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    color: "grey",
    size: "S",
    sizes: ["S","L","M","XL"],
    fit: "Loose fit",
    description:"Long, round-necked T-shirt in soft jersey with a curved hem"
  },
  {
    id: 102,
    cat:"men",
    heading: "Black T-shirt Regular Fit",
    price: "Rs.899",
    url: "https://images.pexels.com/photos/3375230/pexels-photo-3375230.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    color: "black",
    size: "S",
    sizes: ["S","L","M","XL"],
    fit: "Muscle fit",
    description:"Long, round-necked T-shirt in soft jersey with a curved hem"
  },
  {
    id: 103,
    cat:"men",
    heading: "Red Suit Regular Fit",
    price: "Rs.1399",
    url: "https://images.pexels.com/photos/2865977/pexels-photo-2865977.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    color: "red",
    size: "M",
    sizes: ["S","L","M","XL"],
    fit: "Regular fit",
    description:"Red fabric made from a cotton blend with an elasticated, drawstring waist, side pockets, an open back pocket and raw, roll-edge hems."
  },
  {
    id: 104,
    cat:"men",
    heading: "Black Jacket Regular Fit",
    price: "Rs.1500",
    url: "https://images.pexels.com/photos/5944321/pexels-photo-5944321.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    color: "black",
    size: "L",
    sizes: ["S","L","M","XL"],
    fit: "Regular fit",
    description:"Shirt jacket in cotton twill with a collar, yoke at the back, classic front and open chest pockets. Long sleeves with a sleeve placket and buttoned cuffs, and a rounded hem."

  },
  {
    id: 105,
    cat:"men",
    heading: "Black T-shirt Regular Fit",
    price: "Rs.1500",
    url: "https://images.pexels.com/photos/2573791/pexels-photo-2573791.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    color: "black",
    size: "XL",
    sizes: ["S","L","M","XL"],
    fit: "Relaxed fit",
    description:"Long, round-necked T-shirt in soft jersey with a curved hem."
  },
  {
    id: 106,
    cat:"men",
    heading: "Yellow T-shirt Regular Fit",
    price: "Rs.1400",
    url: "https://images.pexels.com/photos/5325884/pexels-photo-5325884.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    color: "yellow",
    size: "M",
    sizes: ["S","L","M","XL"],
    fit: "Slim fit",
    description:"Ankle-length suit trousers in airy linen with a hook-and-eye fastening and zip fly. Side pockets, welt back pockets and tapered legs with creases. Slim Fit – a fit that is close-fitting at the thighs, knees and ankles to create a fitted silhouette."
  },
  {
    id: 107,
    cat:"men",
    heading: "Blue T-shirt Regular Fit",
    price: "Rs.900",
    url: "https://images.pexels.com/photos/3193731/pexels-photo-3193731.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    color: "blue",
    size: "L",
    sizes: ["S","L","M","XL"],
    fit: "Relaxed fit",
    description:"Blue fabric made from a cotton blend with an elasticated, drawstring waist, side pockets, an open back pocket and raw, roll-edge hems."
  },
  {
    id: 108,
    cat:"women",
    heading: "Red Half-sleeves Regular Fit",
    price: "Rs.1300",
    url: "https://images.pexels.com/photos/6590461/pexels-photo-6590461.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    color: "red",
    size: "XL",
    sizes: ["S","L","M","XL"],
    fit: "Relaxed fit",
    description:"Red fabric made from a cotton blend with an elasticated, drawstring waist, side pockets, an open back pocket and raw, roll-edge hems."
  },

  {
    id: 109,
    cat:"women",
    heading: "Full black Regular Fit",
    price: "Rs.1200",
    url: "https://images.pexels.com/photos/3867132/pexels-photo-3867132.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    color: "black",
    size: "M",
    sizes: ["S","L","M","XL"],
    fit: "Regular fit",
    description:"Long-sleeved, turtleneck top in cotton jersey. Muscle Fit – a fit designed to showcase the body’s physique with narrow shoulders and tapered sleeves to create a flattering silhouette."
  },


  {
    id: 110,
    cat:"men",
    heading: "Full black Jacket",
    price: "Rs.699",
    url: "https://images.pexels.com/photos/157675/fashion-men-s-individuality-black-and-white-157675.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    color: "black",
    size: "L",
    sizes: ["S","L","M","XL"],
    fit: "Regular fit",
    description:"Shirt jacket in cotton twill with a collar, yoke at the back, classic front and open chest pockets. Long sleeves with a sleeve placket and buttoned cuffs, and a rounded hem."
  },

  {
    id: 111,
    cat:"men",
    heading: "Full  violet Regular Fit",
    price: "Rs.1800",
    url: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    color: "violet",
    size: "L",
    sizes: ["S","L","M","XL"],
    fit: "Regular fit",
    description:"Top in soft sweatshirt fabric. Slightly looser fit with dropped shoulders and ribbing around the neckline, cuffs and hem. Soft brushed inside."
  },

  {
    id: 112,
    cat:"men",
    heading: "Full Brown Regular Fit",
    price: "Rs.1200",
    url: "https://images.pexels.com/photos/2698844/pexels-photo-2698844.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    color: "brown",
    size: "L",
    sizes: ["S","L","M","XL"],
    fit: "Regular fit",
    description:"Top in soft sweatshirt fabric. Slightly looser fit with dropped shoulders and ribbing around the neckline, cuffs and hem. Soft brushed inside."
  },

  {
    id: 113,
    cat:"men",
    heading: "Hoodie Yellow Regular Fit",
    price: "Rs.700",
    url: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    color: "yellow",
    size: "M",
    sizes: ["S","L","M","XL"],
    fit: "Regular fit",
    description:"Hoodie in sweatshirt fabric made from a cotton blend. Relaxed fit with a lined, drawstring hood, long sleeves, kangaroo pocket and ribbing at the cuffs and hem. Soft brushed inside."
  },

  {
    id: 114,
    cat:"men",
    heading: "Jacket Brown Regular Fit",
    price: "Rs.899",
    url: "https://images.pexels.com/photos/7129168/pexels-photo-7129168.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    color: "brown",
    size: "M",
    sizes: ["S","L","M","XL"],
    fit: "Regular fit",
    description:"Top in soft sweatshirt fabric. Slightly looser fit with dropped shoulders and ribbing around the neckline, cuffs and hem. Soft brushed inside."
  },

  {
    id: 115,
    cat:"women",
    heading: "Grey Jacket Regular Fit",
    price: "Rs.1200",
    url:"  https://images.pexels.com/photos/4656650/pexels-photo-4656650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    color: "grey",
    size: "M",
    sizes: ["S","L","M","XL"],
    fit: "Regular fit",
    description:"Long-sleeved, turtleneck top in cotton jersey. Muscle Fit – a fit designed to showcase the body’s physique with narrow shoulders and tapered sleeves to create a flattering silhouette."
  },

];

export default listOfProducts;
