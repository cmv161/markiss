import React, { Component } from "react";
import { Box, Grid, IconButton } from "@material-ui/core";
import {
  AppStyle,
  InputStyle,
  StyledBadge,
  StylesButton,
  StylesDrawer,
  StylesLink,
  TypographyStyle,
} from "./style";
import MenuIcon from "@material-ui/icons/Menu";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import icon from "./mark.png";
import SearchIcon from "@material-ui/icons/Search";
import MenuList from "./menu-list";
import { connect } from "react-redux";
import { authorizationToggleRedux } from "../../actions";

class Header extends Component {
  state = {
    drawer: false,
  };

  render() {
    const {
      searchProduct,
      shoppingCart,
      authorization,
      authorizationToggleRedux,
    } = this.props;

    let sum = shoppingCart
      .map((item) => +item.count)
      .reduce((a, b) => a + b, 0);
    const totalItem = shoppingCart.map((item) => +item.total);
    let totalPrice = totalItem.reduce((a, b) => a + b, 0).toLocaleString();

    if (totalPrice !== "0") {
      totalPrice = totalPrice + " ₽";
    } else {
      totalPrice = "Корзина";
    }

    if (sum === 0) {
      sum = null;
    }

    const toggleDrawer = (open) => () => {
      this.setState({
        drawer: open,
      });
    };
    const loginButton = authorization ? "Выход" : "Вход";

    return (
      <div>
        <AppStyle position="static">
          <Grid container>
            <Grid item xs={8} sm={2} md={3} lg={2}>
              <Box ml={4} display="flex" alignItems="center">
                <IconButton
                  onClick={toggleDrawer(true)}
                  edge="start"
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <StylesLink to="/">
                  <TypographyStyle variant="inherit">
                    MarKissMarket
                  </TypographyStyle>
                </StylesLink>
                <img src={icon} alt="logo" width="40" height="40" />
              </Box>
            </Grid>
            <Grid item xs={2} md={1} sm={1} lg={"auto"}>
              <Box
                mt={1}
                alignItems="flex-end"
                display={{
                  xs: "flex",
                  md: "none",
                  lg: "none",
                }}
              >
                <StylesLink to="/shoppingcart">
                  <IconButton aria-label="cart">
                    <StyledBadge badgeContent={sum} color="primary">
                      <ShoppingCartIcon />
                    </StyledBadge>
                  </IconButton>
                </StylesLink>
              </Box>
            </Grid>

            <Grid item xs={7} sm={4} md={5}>
              <Box ml={4} display="flex" alignItems="center">
                <Box mt={2} mr={1} display="flex" alignItems="center">
                  <SearchIcon />
                </Box>
                <InputStyle
                  label="Я ищу..."
                  onChange={(event) => searchProduct(event.target.value)}
                />
              </Box>
            </Grid>

            <Grid item xs={1} sm={1} md={1}>
              <Box
                justifyContent="flex-end"
                display={{
                  xs: "none ",
                  md: " flex",
                  lg: " flex",
                }}
              >
                <Box>
                  <StylesLink to="/shoppingcart">
                    <IconButton aria-label="cart">
                      <StyledBadge badgeContent={sum} color="primary">
                        <ShoppingCartIcon />
                      </StyledBadge>
                    </IconButton>
                  </StylesLink>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={false} sm={2} md={2} lg={1}>
              <Box
                mx={1}
                mt={1}
                mr={2}
                display={{
                  xs: "none ",
                  md: " flex",
                  lg: " flex",
                }}
              >
                <StylesLink to="/shoppingcart">
                  <StylesButton variant="contained" color="primary">
                    {totalPrice}
                  </StylesButton>
                </StylesLink>
              </Box>
            </Grid>

            <Grid item xs={false} sm={2} md={2} lg={1}>
              <Box
                mt={1}
                display={{
                  xs: "none ",
                  md: " flex",
                  lg: " flex",
                }}
              >
                <StylesLink to="/signin">
                  <StylesButton
                    onClick={() => authorizationToggleRedux(false)}
                    variant="contained"
                    color="primary"
                  >
                    {loginButton}
                  </StylesButton>
                </StylesLink>
              </Box>
            </Grid>
          </Grid>
        </AppStyle>

        <StylesDrawer open={this.state.drawer} onClose={toggleDrawer(false)}>
          <MenuList totalPrice={totalPrice} toggleDrawer={toggleDrawer} />
        </StylesDrawer>
      </div>
    );
  }
}

const mapStateToProps = ({ shoppingCartReducer, authorizationReducer }) => {
  return {
    shoppingCart: shoppingCartReducer.shoppingCart,
    authorization: authorizationReducer.authorization,
  };
};
const mapDispathToProps = {
  authorizationToggleRedux,
};

export default connect(mapStateToProps, mapDispathToProps)(Header);
