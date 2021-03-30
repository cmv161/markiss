import styled from "styled-components";
import { Box, Card, CardMedia } from "@material-ui/core";

const CardMediaStyle = styled(CardMedia)`
  height: 150px;
`;

const CardStyle = styled(Card)`
  max-height: 370px;
  max-width: 300px;
  min-width: 200px;
  min-height: 270px;
`;

const BoxStyle = styled(Box)`
  margin-bottom: 65px;
`;

export { CardMediaStyle, CardStyle, BoxStyle };
