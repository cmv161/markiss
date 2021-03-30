import styled from "styled-components";
import { Grid } from "@material-ui/core";

const GridStyle = styled(Grid)`
  display: grid;
  height: 65vh;
`;

const TypographyStyle = styled.p`
  font-size: 4rem;
  color: white;

  @media ${(props) => props.theme.media.phone} {
    font-size: 1.7rem;
  }
`;

export { GridStyle, TypographyStyle };
