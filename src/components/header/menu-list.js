import React from "react";
import List from "@material-ui/core/List";
import { withRouter } from "react-router-dom";
import {
  Box,
  Divider,
  ListItem,
  ListItemIcon,
  Typography,
} from "@material-ui/core";
import {
  AccountCircle,
  Fastfood,
  InvertColors,
  Pets,
  ShoppingCart,
} from "@material-ui/icons";
import {
  authorizationToggleRedux,
  categoryAddProductRedux,
} from "../../actions";
import { connect } from "react-redux";
import { StylesLink } from "./style";

const MenuList = ({
  totalPrice,
  categoryAddProductRedux,
  toggleDrawer,
  authorization,
  authorizationToggleRedux,
}) => {
  const loginButton = authorization ? "Выход" : "Вход";
  const productSwitch = (e) => {
    categoryAddProductRedux(e);
  };

  return (
    <div onClick={toggleDrawer(false)}>
      <List>
        <Box display="flex" justifyContent="center">
          <Typography color="textPrimary" variant="h5">
            MarKissMarket
          </Typography>
        </Box>
        <Divider />
        <Box mt={3}>
          <ListItem button>
            <ListItemIcon>
              <Fastfood />
            </ListItemIcon>
            <StylesLink
              to="/product"
              id="feed"
              onClick={(event) => productSwitch(event.currentTarget.id)}
            >
              <Typography color="textSecondary" variant="h6">
                Корма
              </Typography>
            </StylesLink>
          </ListItem>
        </Box>

        <ListItem button>
          <ListItemIcon>
            <Pets />
          </ListItemIcon>
          <StylesLink
            to="/product"
            id="vitamins"
            onClick={(event) => productSwitch(event.currentTarget.id)}
          >
            <Typography color="textSecondary" variant="h6">
              Витамины
            </Typography>
          </StylesLink>
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <InvertColors />
          </ListItemIcon>
          <StylesLink
            to="/product"
            id="toilet"
            onClick={(event) => productSwitch(event.currentTarget.id)}
          >
            <Typography color="textSecondary" variant="h6">
              Наполнитель
            </Typography>
          </StylesLink>
        </ListItem>

        <Divider />
        <Box mt={3}>
          <ListItem button>
            <ListItemIcon>
              <ShoppingCart />
            </ListItemIcon>
            <StylesLink to="/shoppingcart">
              <Typography color="primary" variant="h6">
                {totalPrice}
              </Typography>
            </StylesLink>
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <AccountCircle />
            </ListItemIcon>
            <StylesLink to="/signin">
              <Typography
                color="primary"
                variant="h6"
                onClick={() => authorizationToggleRedux(false)}
              >
                {loginButton}
              </Typography>
            </StylesLink>
          </ListItem>
        </Box>
      </List>
    </div>
  );
};

const mapStateToProps = ({ shoppingCartReducer, authorizationReducer }) => {
  return {
    authorization: authorizationReducer.authorization,
    shoppingCart: shoppingCartReducer.shoppingCart,
  };
};

const mapDispathToProps = {
  categoryAddProductRedux,
  authorizationToggleRedux,
};

export default connect(
  mapStateToProps,
  mapDispathToProps
)(withRouter(MenuList));
