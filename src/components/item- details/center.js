import React, { Component } from "react";
import { connect } from "react-redux";
import { shoppingCartPushRedux } from "../../actions";
import { storage } from "../../utils/utils";
import { Box, Grid } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { ImgStyle } from "./style";

class Center extends Component {
  state = {
    image: this.props.src,
  };

  onToggleImage = (name) => {
    this.setState({
      image: name,
    });
  };

  render() {
    const {
      src,
      src2,
      src3,
      price,
      arr,
      keyItem,
      shoppingCartPushRedux,
      shoppingCart,
    } = this.props;
    storage("shoppingCart", shoppingCart);
    const { image } = this.state;

    const addShoppingCart = () => {
      shoppingCartPushRedux(arr[0]);
    };

    let cartButton = "В корзину";
    let cartButtonStyle = "primary";

    if (
      (shoppingCart.find((itemShopp) => itemShopp.key === keyItem) && true) ||
      false
    ) {
      cartButton = "В корзине";
      cartButtonStyle = "default";
    }

    return (
      <React.Fragment>
        <Box ml={4} mr={2} mt={2}>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            item
            xs={2}
            sm={2}
            md={1}
          >
            <ImgStyle
              onClick={this.onToggleImage.bind(this, src)}
              height="80px"
              src={src}
              alt="..."
            ></ImgStyle>

            <ImgStyle
              onClick={this.onToggleImage.bind(this, src2)}
              height="80px"
              src={src2}
              alt="..."
            ></ImgStyle>
            <ImgStyle
              onClick={this.onToggleImage.bind(this, src3)}
              height="80px"
              src={src3}
              alt="..."
            ></ImgStyle>
          </Grid>
        </Box>
        <Grid item xs={6} sm={6} md={2}>
          <img height="245px" src={image} className="rounded" alt="..."></img>
        </Grid>
        <Grid item xs={12} sm={12} md={3}>
          <Box ml={2}>
            <Typography variant="h5">{price} ₽</Typography>
            <Button
              variant="contained"
              color={cartButtonStyle}
              onClick={() => addShoppingCart()}
            >
              {cartButton}
            </Button>
          </Box>
        </Grid>
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ shoppingCartReducer }) => {
  return {
    shoppingCart: shoppingCartReducer.shoppingCart,
  };
};

const mapDispathToProps = {
  shoppingCartPushRedux,
};

export default connect(mapStateToProps, mapDispathToProps)(Center);
