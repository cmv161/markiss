import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import { ButtonFooterStyle } from "./style";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

export default class Footer extends Component {
  state = {
    filter: "descriptionFool",
  };
  buttons = [
    {
      name: "descriptionFool",
      label: "Описание",
    },
    {
      name: "properties",
      label: "Характеристики",
    },
    {
      name: "review",
      label: "Отзывы",
    },
  ];
  onToggleButton = (name) => {
    this.setState({
      filter: name,
    });
  };

  render() {
    let productCard;
    const { filter } = this.state;
    const {
      descriptionFool,
      properties,
      review
    } = this.props;
    const propertiesList = (
      <Grid container direction="row">
        <Grid item xs={5} sm={2} md={2}>
          <Box
            fontSize="h6.fontSize"
            textAlign="left"
            fontWeight="fontWeightBold"
          >
            Тип
          </Box>
          <Box
            my={2}
            fontSize="h6.fontSize"
            textAlign="left"
            fontWeight="fontWeightBold"
          >
            Для кого
          </Box>
          <Box
            fontSize="h6.fontSize"
            textAlign="left"
            fontWeight="fontWeightBold"
          >
            Вкус
          </Box>
        </Grid>
        <Grid item xs={5} sm={2} md={2}>
          <Box fontSize="h6.fontSize" textAlign="left">
            {properties.type}
          </Box>
          <Box my={2} fontSize="h6.fontSize" textAlign="left">
            {properties.designedFor}
          </Box>
          <Box fontSize="h6.fontSize" textAlign="left">
            {properties.taste}
          </Box>
        </Grid>
      </Grid>
    );
    const descriptionFoolList = (
      <Grid item>
        <Typography align="justify" style={{ textIndent: 30 }}>
          {descriptionFool}
        </Typography>
      </Grid>
    );

    const reviewList = review.map(
      ({
        dignity,
        limitations,
        comment,
        number
      }) => {
        return (
          <Grid item key={number}>
            <Box fontSize="h6.fontSize" textAlign="left">
              Достоинства
            </Box>
            <p>{dignity}</p>
            <Box fontSize="h6.fontSize" textAlign="left">
              Недостатки
            </Box>
            <p>{limitations}</p>
            <Box fontSize="h6.fontSize" textAlign="left">
              Комментарий
            </Box>
            <p>{comment}</p>
            <hr></hr>
          </Grid>
        );
      }
    );

    switch (filter) {
      case "descriptionFool":
        productCard = descriptionFoolList;
        break;
      case "properties":
        productCard = propertiesList;
        break;
      case "review":
        productCard = reviewList;
        break;
      default:
        productCard = descriptionFoolList;
    }

    const buttons = this.buttons.map(({
      name,
      label
    }) => {
      const isActive = filter === name;
      const clazz = isActive ? "primary" : "default";

      return (
        <Grid key={label} item xs={12} sm={2} md={2} style={{ margin: "10px" }}>
          <ButtonFooterStyle
            variant="contained"
            color={clazz}
            onClick={this.onToggleButton.bind(this, name)}
          >
            {label}
          </ButtonFooterStyle>
        </Grid>
      );
    });

    return (
      <Grid item xs={12} sm={12} md={12}>
        <hr/>
        <Grid container>{buttons}</Grid>
        <Grid
          // container
          item
          xs={10}
          sm={6}
          md={6}
          style={{
            marginBottom: "45px",
            marginTop: "10px",
            marginLeft: "20px",
          }}
        >
          {productCard}
        </Grid>
      </Grid>
    );
  }
}
