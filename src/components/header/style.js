import styled from "styled-components";
import {
  AppBar,
  Badge,
  Button,
  Drawer,
  TextField,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";

const TypographyStyle = styled(Typography)`
  margin: 30px;
  font-size: 2rem;
  color: white;

  @media ${(props) => props.theme.media.phone} {
    font-size: 1.3rem;
  }
`;

const TypographyCartStyle = styled(Typography)`
  display: inline-block;
  color: white;
`;

const InputStyle = styled(TextField)`
  color: white;
  fontsize: 26;
  width: 100%;
`;

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}))(Badge);

const AppStyle = styled(AppBar)`
  background: linear-gradient(to right, #4caf50 0, #9ad29c 60%);
`;

const StylesDrawer = styled(Drawer)`
  margin-top: 100px;
`;

const StylesLink = styled(Link)`
  margin-left: 10px;
  text-decoration: none;
  width: 100%;
`;

const StylesButton = styled(Button)`
  padding-right: 15px;
  text-decoration: none;
  white-space: nowrap;
  width: 100%;
`;

const title = {
  flexGrow: 1,
};

export {
  StyledBadge,
  StylesButton,
  title,
  InputStyle,
  AppStyle,
  TypographyStyle,
  StylesDrawer,
  StylesLink,
  TypographyCartStyle,
};


