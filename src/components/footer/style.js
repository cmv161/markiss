import styled from "styled-components";
import { BottomNavigation, Box, Button } from "@material-ui/core";

const BoxStyle = styled(Box)`
  bottom: 0;
  position: fixed;
  width: 100%;
  height: 60px;
`;

const BottomNavigationStyle = styled(BottomNavigation)`
  background-color: red;
  background: aqua;
`;

const ButtonFooterStyle = styled(Button)`
  margin: 10px;
`;

export { BoxStyle, BottomNavigationStyle, ButtonFooterStyle };
