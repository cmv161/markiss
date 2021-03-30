import React, { Component } from "react";
import DummyApiService from "../../services/dummy-api-service";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { shoppingCartPushRedux } from "../../actions";
import { storage } from "../../utils/utils";
import { BoxStyle } from "./style";
import {
  Box,
  Container,
  Divider,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import renderItems from "./render-Items";
import renderColumnLeft from "./render-column-left";
import Pagination from "@material-ui/lab/Pagination";

class ItemList extends Component {
  state = {
    data: [],
    loading: true,
    error: false,
    brand: [],
    visibleBrand: [],
    priceMin: "",
    priceMax: "",
    anchorEl: null,
    page: 1,
    totalAmountItem: null,
    paginationAmount: 4,
  };
  dummyApiService = new DummyApiService();
  totalAmountItemNew = null;

  componentDidMount() {
    this.updateProduct();
  }

  componentDidUpdate(prevProps) {
    storage("shoppingCart", this.props.shoppingCart);
    if (
      this.props.category !== prevProps.category ||
      this.props.find !== prevProps.find
    ) {
      this.updateProduct();
    }
  }

  componentWillUnmount() {}

  updateProduct() {
    this.setState({
      loading: true,
    });
    const { category } = this.props;
    const { find } = this.props;

    this.dummyApiService
      .getAllData()
      .then((data) => {
        const newData = data.filter((item) => {
          if (find === "") {
            return item.category === category;
          } else {
            return (
              item.name.toLowerCase().indexOf(find.toLowerCase()) > -1 ||
              item.description.toLowerCase().indexOf(find.toLowerCase()) > -1
            );
          }
        });

        let columnLeft = new Set(); /*уникальный бренд*/
        let priceArrr = [];
        newData.forEach((item) =>
          priceArrr.push(item.price)
        ); /*собираем цену товаров*/
        let min = Math.min.apply(null, priceArrr);
        let max = Math.max.apply(null, priceArrr);

        newData.forEach((item) =>
          columnLeft.add(item.name)
        ); /*собираем уникальный бренд*/

        this.setState({
          data: newData,
          loading: false,
          brand: Array.from(columnLeft),
          visibleBrand: Array.from(columnLeft),
          priceMin: min,
          priceMax: max,
          page: 1,
        });
      })
      .catch(this.onError);
  }

  onError = (err) => {
    this.setState({
      error: true,
      loading: false,
    });
  };

  onItemSelected = (key) => {
    const { history } = this.props;
    history.push(`/product/${key}`);
  };

  addShoppingCart = (event, arrItem) => {
    const { shoppingCartPushRedux } = this.props;
    shoppingCartPushRedux(arrItem);
    event.stopPropagation();
  };

  changePriceMin(min) {
    this.setState({
      priceMin: +min,
    });
  }

  changePriceMax(max) {
    this.setState({
      priceMax: +max,
    });
  }

  renderPrice() {
    const { priceMin, priceMax } = this.state;
    return (
      <Box mt={2}>
        <Divider />
        <Typography>Цена</Typography>
        <Box display="flex" m={2}>
          <Box mr={2}>
            <TextField
              label={priceMin}
              size="small"
              variant="outlined"
              onChange={(event) => this.changePriceMin(event.target.value)}
            ></TextField>
          </Box>
          <TextField
            label={priceMax}
            size="small"
            variant="outlined"
            onChange={(event) => this.changePriceMax(event.target.value)}
          ></TextField>
        </Box>
      </Box>
    );
  }

  handleClick = (event) => {
    this.setState({
      anchorEl: event.currentTarget,
    });
  };

  handleClose = () => {
    this.setState({
      anchorEl: null,
    });
  };

  renderColumn(arr) {
    return arr.map((item, index) => {
      return (
        <FormControlLabel
          key={item}
          control={
            <Checkbox
              defaultChecked={true}
              onChange={() => this.brandToggle(item)}
              color="primary"
            />
          }
          label={item}
        />
      );
    });
  }

  brandPriceFilter(data, brand) {
    const {
      paginationAmount,
      page,
      totalAmountItem,
      priceMin,
      priceMax,
    } = this.state;

    const searchBrand = data.filter((item) => {
      if (brand.indexOf(item.name) !== -1) return true;
      return false;
    });

    const searchPrice = searchBrand.filter((item) => {
      if (item.price >= priceMin && item.price <= priceMax) return true;
      return false;
    });
    if (searchPrice.length !== totalAmountItem) {
      this.totalAmountItemNew = searchPrice.length;
    }

    const afterPagination = paginationAmount * page;
    const beforePagination = paginationAmount * (page - 1);

    const paginationFilter = searchPrice.filter((item, index) => {
      if (index >= beforePagination && index <= afterPagination - 1) {
        return true;
      }
      return false;
    });

    return paginationFilter;
  }

  brandToggle(item) {
    this.setState((state) => {
      if (state.brand.indexOf(item) !== -1) {
        const index = state.brand.indexOf(item);
        state.brand.splice(index, 1);
        return {
          brand: state.brand,
        };
      } else if (state.brand.indexOf(item) === -1) {
        state.brand.push(item);
        return {
          brand: state.brand,
        };
      }
    });
  }

  paginationControlled() {
    const { page, paginationAmount } = this.state;
    const totalAmountItem = this.totalAmountItemNew;

    const handleChange = (event, value) => {
      this.setState({
        page: value,
      });
    };

    return (
      <BoxStyle>
        <Typography align="center" variant="h6">
          Страница: {page}
        </Typography>
        <Pagination
          count={Math.ceil(totalAmountItem / paginationAmount)}
          page={page}
          onChange={handleChange}
        />
      </BoxStyle>
    );
  }

  render() {
    const { shoppingCart } = this.props;
    const { data, loading, error, brand, visibleBrand, anchorEl } = this.state;
    const hasData = !(loading || error);
    const spinner = loading ? <Spinner /> : null;
    const errorMessage = error ? <ErrorIndicator /> : null;
    const visibleItems = this.brandPriceFilter(data, brand);
    const items = renderItems(
      visibleItems,
      shoppingCart,
      this.onItemSelected,
      this.addShoppingCart
    );
    const column = this.renderColumn(visibleBrand);
    const priceFilter = this.renderPrice(visibleItems);
    const content = hasData ? items : null;
    const pagination = this.paginationControlled();
    const columnLeft = loading
      ? null
      : renderColumnLeft(
          column,
          priceFilter,
          anchorEl,
          this.handleClick,
          this.handleClose
        );

    return (
      <div>
        {/*{columnLeft}*/}
        <div>
          <Grid item xs={12} sm={6} md={3} lg={3}>
            {columnLeft}
          </Grid>
          {errorMessage}
          <Box mt={6}>
            <Container>
              <Grid container spacing={4}>
                {content}
              </Grid>
            </Container>
            {spinner}
          </Box>
        </div>
        <Box mt={6} display="flex" justifyContent="center">
          {pagination}
        </Box>
      </div>
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

export default connect(
  mapStateToProps,
  mapDispathToProps
)(withRouter(ItemList));
