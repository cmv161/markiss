import styled from "styled-components";
import { Box, Button, Grid } from "@material-ui/core";

const GridStyle = styled(Grid)`
  background-color: white;
  width: 80%;
`;
const BoxStyle = styled(Box)`
  margin: 5%;
`;

const ButtonFooterStyle = styled(Button)`
  margin: 30px;
  width: 100%;
`;
const ImgStyle = styled.img`
  margin: 5px;
  cursor: pointer;
`;

export { ButtonFooterStyle, GridStyle, BoxStyle, ImgStyle };
