import React from "react";
import { Box } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

const renderColumnLeft = (
  column,
  priceFilter,
  anchorEl,
  handleClick,
  handleClose
) => {
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
      <Box
        ml={4}
        style={{
          float: "left",
          width: "300px",
        }}
      >
        <div>
          <FormControlLabel
            control={
              <Switch
                defaultChecked={false}
                onChange={handleClick}
                color="primary"
              />
            }
            label="Фильтр"
          />
          <Menu
            elevation={0}
            getContentAnchorEl={null}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
            anchorEl={anchorEl}
            // keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem>
              <FormControl component="fieldset">
                <FormLabel component="legend">Производитель</FormLabel>

                {column}
                {priceFilter}
              </FormControl>
            </MenuItem>
          </Menu>
        </div>
      </Box>
    );
  }
};

export default renderColumnLeft;
