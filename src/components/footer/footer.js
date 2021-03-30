import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";

import { BoxStyle } from "./style";

import Modal from "./modal";

const useStyles = makeStyles({
  root: {
    width: 500,
  },
});

export default function Footer() {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [content, setContent] = React.useState(0);

  const handleClickOpen = (e) => {
    setOpen(true);
    setContent(e);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <BoxStyle display="flex" justifyContent="center">
      <BottomNavigation
        style={{ backgroundColor: "#F6F6F6" }}
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction
          onClick={() => handleClickOpen("О нас")}
          label="О нас"
          icon={<FavoriteIcon />}
        />
        <BottomNavigationAction
          onClick={() => handleClickOpen("Контакты")}
          label="Контакты"
          icon={<LocationOnIcon />}
        />
      </BottomNavigation>
      <Modal content={content} open={open} handleClose={handleClose} />
    </BoxStyle>
  );
}
