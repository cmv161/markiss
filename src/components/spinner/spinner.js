import React from "react";
import { Box, CircularProgress } from "@material-ui/core";

const Spinner = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <CircularProgress disableShrink/>
    </Box>
  );
};

export default Spinner;

