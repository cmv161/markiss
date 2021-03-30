import React, { Component } from "react";
import DummyApiService from "../../services/dummy-api-service";
import Center from "./center";
import ErrorIndicator from "../error-indicator";
import Spinner from "../spinner";
import { Box, Grid } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Footer from "./footer";
import { BoxStyle, GridStyle } from "./style";

export default class ItemDetails extends Component {
  state = {
    data: [],
    loading: true,
    error: false,
  };

  dummyApiService = new DummyApiService();

  updateProduct() {
    this.setState({
      loading: true,
    });
    const { id } = this.props;
    this.dummyApiService
      .getAllData()
      .then((data) => {
        const newData = data.filter((item) => item.key === id);
        this.setState({
          data: newData,
          loading: false,
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

  componentDidMount() {
    this.updateProduct();
  }

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
    }
  }

  renderItems(arr) {
    return arr.map(
      ({
        name,
        description,
        price,
        key,
        src,
        src2,
        src3,
        descriptionFool,
        properties,
        review,
      }) => {
        return (
          <GridStyle
            container
            direction="row"
            justify="center"
            alignItems="center"
            key={key}
          >
            <Grid item xs={12} sm={12} md={2}>
              <Box ml={1}>
                <Typography variant="h5">{name}</Typography>
              </Box>
              <Box ml={1}>
                <Typography align="center" variant="subtitle1">
                  <strong>Код товара:</strong> {key}
                </Typography>
              </Box>
            </Grid>

            <Center
              keyItem={key}
              price={price}
              src={src}
              src2={src2}
              src3={src3}
              arr={arr}
            />

            <Footer
              name={name}
              description={description}
              descriptionFool={descriptionFool}
              properties={properties}
              review={review}
            />
          </GridStyle>
        );
      }
    );
  }

  render() {
    const { data, loading, error } = this.state;
    const hasData = !(loading || error);
    const spinner = loading ? <Spinner /> : null;
    const errorMessage = error ? <ErrorIndicator /> : null;
    const items = this.renderItems(data);
    const content = hasData ? items : null;

    return (
      <BoxStyle>
        {errorMessage}
        {content}
        {spinner}
      </BoxStyle>
    );
  }
}
