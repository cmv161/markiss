import React from "react";
import { Box, Paper } from "@material-ui/core";
import { GridStyle, TypographyStyle } from "./style";

const HomePage = () => {
  return (
    <Box mt={1} display="flex" alignItems="center" justifyContent="center">
      <GridStyle item md={8} xs={11} sm={2}>
        <Paper
          style={{
            backgroundImage: `url(https://loremflickr.com/1920/868/animal)`,
          }}
        >
          <Box display="flex" alignItems="center" justifyContent="center">
            <TypographyStyle>MarKissMarket Think Different</TypographyStyle>
          </Box>
        </Paper>
      </GridStyle>
    </Box>
  );
};

export default HomePage;
