import React from "react";
import {
  Box,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@material-ui/core";
import Button from "@material-ui/core/Button";

import {CardMediaStyle, CardStyle} from "./style";

const renderItems = (
  arr,
  shoppingCart = [],
  onItemSelected,
  addShoppingCart,
) => {
  return arr.map((item, index) => {
    const {
      name,
      description,
      price,
      key,
      src
    } = item;
    let cartButton = "В корзину";
    let cartButtonStyle = "primary";

    if (
      (shoppingCart.find((itemShopp) => itemShopp.key === item.key) && true) ||
      false
    ) {
      cartButton = "В корзине";
      cartButtonStyle = "default";
    }

    return (
      <Grid
        item
        xs={12}
        sm={6}
        md={3}
        lg={3}
        onClick={() => onItemSelected(key)}
        key={key}
      >
        <CardStyle>
          <Box m={1} mt={2}>
            <CardMediaStyle style={{backgroundSize: "contain"}} image={src}/>
          </Box>
          <CardContent>
            <Typography align="center" variant="h6" gutterBottom>
              {name}
            </Typography>
            <Typography align="center">{price} P</Typography>
            <Typography align="center">{description}</Typography>
          </CardContent>

          <CardActions style={{justifyContent: "center"}}>
            <Button
              onClick={(event) => addShoppingCart(event, arr[index], price)}
              variant="contained"
              color={cartButtonStyle}
            >
              {cartButton}
            </Button>
          </CardActions>
        </CardStyle>
      </Grid>
    );
  });
};

export default renderItems;


