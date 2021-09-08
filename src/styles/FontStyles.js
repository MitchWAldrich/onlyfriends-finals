import { createGlobalStyle } from "styled-components";
import RobotoWoff from "../fonts/roboto-v27-latin-regular.woff";
import RobotoWoff2 from "../fonts/roboto-v27-latin-regular.woff2";

const FontStyles = createGlobalStyle`

@font-face {
  font-family: 'Roboto';
  src:  url(${RobotoWoff}) format('woff'),
        url(${RobotoWoff2}) format('woff2');
}
`;

export default FontStyles;