import React, { Component } from "react";
import { connect } from "react-redux";
import {
  shoppingCartAllDeleteRedux,
  shoppingCartDeleteRedux,
  shoppingCartPushRedux,
} from "../../actions";
import { storage } from "../../utils/utils";
import { withRouter } from "react-router-dom";
import Box from "@material-ui/core/Box";
import { Grid } from "@material-ui/core";
import { BoxStyle, GridStyle } from "./style";

class ShoppingCart extends Component {
  componentDidUpdate() {
    storage("shoppingCart", this.props.shoppingCart);
  }

  onIncrement(key) {
    const { shoppingCartPushRedux, shoppingCart } = this.props;
    let item = shoppingCart.find((itemShopp) => itemShopp.key === key);
    console.log(shoppingCartPushRedux);
    shoppingCartPushRedux(item);
  }

  onDecrement(key) {
    const { shoppingCart, shoppingCartDeleteRedux } = this.props;
    let item = shoppingCart.find((itemShopp) => itemShopp.key === key);
    shoppingCartDeleteRedux(item);
  }

  onDelete(key) {
    const { shoppingCart, shoppingCartAllDeleteRedux } = this.props;
    let item = shoppingCart.find((itemShopp) => itemShopp.key === key);
    shoppingCartAllDeleteRedux(item);
  }

  onItemSelected(key) {
    const { history } = this.props;
    history.push(`/product/${key}`);
  }

  render() {
    const { shoppingCart } = this.props;
    return shoppingCart.map((item, index) => {
      const { key, name, count, total, src } = item;
      return (
        <BoxStyle key={key}>
          <GridStyle
            container
            direction="row"
            justify="center"
            alignItems="center"
          >
            <Grid item xs={1} sm={1} md={1}>
              <Box
                fontSize={25}
                textAlign="left"
                color="success.main"
                fontWeight="fontWeightBold"
              >
                {index + 1}
              </Box>
            </Grid>

            <Grid item xs={8} sm={2} md={2}>
              <img
                onClick={() => this.onItemSelected(key)}
                key={key}
                height="205px"
                src={src}
                className="rounded ml-2"
                alt="..."
              ></img>
            </Grid>

            <Grid item xs={6} sm={2} md={2}>
              <Box
                ml={1}
                fontSize="h6.fontSize"
                textAlign="left"
                fontWeight="fontWeightBold"
                color="success.main"
              >
                Наименование
              </Box>
              <Box
                ml={1}
                fontSize="h6.fontSize"
                textAlign="left"
                color="text.secondary"
              >
                {name}
              </Box>
            </Grid>

            <Grid item xs={6} sm={2} md={2}>
              <Box
                fontSize="h6.fontSize"
                textAlign="left"
                fontWeight="fontWeightBold"
                color="success.main"
              >
                Колличество
              </Box>

              <Box
                ml={1}
                fontSize="h6.fontSize"
                textAlign="left"
                color="text.secondary"
              >
                {count} шт
              </Box>
            </Grid>

            <Grid item xs={4} sm={2} md={2}>
              <Box
                fontSize="h6.fontSize"
                textAlign="left"
                fontWeight="fontWeightBold"
                color="success.main"
              >
                Цена
              </Box>

              <Box
                ml={1}
                fontSize="h6.fontSize"
                textAlign="left"
                color="text.secondary"
              >
                {total} р
              </Box>
            </Grid>

            <Grid item xs={6} sm={2} md={2}>
              <Box
                mt={3}
                component="button"
                onClick={() => this.onDecrement(key)}
                className="btn btn-outline-warning"
              >
                <i className="fa fa-minus-circle" />
              </Box>
              <Box
                mt={3}
                mx={2}
                component="button"
                onClick={() => this.onIncrement(key)}
                className="btn btn-outline-success"
              >
                <i className="fa fa-plus-circle" />
              </Box>
              <Box
                mt={3}
                component="button"
                onClick={() => this.onDelete(key)}
                className="btn btn-outline-danger"
              >
                <i className="fa fa-trash" />
              </Box>
            </Grid>
          </GridStyle>
        </BoxStyle>
      );
    });
  }
}

const mapStateToProps = ({ shoppingCartReducer }) => {
  return {
    shoppingCart: shoppingCartReducer.shoppingCart,
  };
};

const mapDispathToProps = {
  shoppingCartPushRedux,
  shoppingCartDeleteRedux,
  shoppingCartAllDeleteRedux,
};
export default connect(
  mapStateToProps,
  mapDispathToProps
)(withRouter(ShoppingCart));
