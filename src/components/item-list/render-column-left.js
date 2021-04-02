import React from "react";
import { Box } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { GridFilterStyle } from "../item- details/style";
import SwapVertIcon from "@material-ui/icons/SwapVert";
import { Transition } from "react-transition-group";
import "./style.css";

const renderColumnLeft = (column, priceFilter, filter, filterToggle) => {
  let width = window.innerWidth;
  if (width > 425) {
    return (
      <Box
        ml={4}
        style={{
          float: "left",
          width: "300px",
        }}
      >
        <FormControl component="fieldset">
          <FormLabel component="legend">Производитель</FormLabel>
          {column}
          {priceFilter}
        </FormControl>
      </Box>
    );
  } else {
    return (
      <React.Fragment>
        <GridFilterStyle
          container
          direction="row"
          justify="flex-end"
          alignItems="flex-start"
        >
          <Grid item onClick={filterToggle}>
            <Typography align="right">Фильтры</Typography>
          </Grid>
          <Grid item>
            <SwapVertIcon />
          </Grid>
        </GridFilterStyle>
        <hr />

        <Transition
          in={filter}
          timeout={300}
          // mountOnEnter
          unmountOnExit
        >
          {(state) => (
            <div className={`filter ${state}`}>
              {column}
              {priceFilter}
            </div>
          )}
        </Transition>
      </React.Fragment>
    );
  }
};

export default renderColumnLeft;
