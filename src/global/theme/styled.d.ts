import "styled-components";
import {design}from "./color.config";

declare module "styled-components" {
  type ThemeType = typeof design;

  export interface DefaultTheme extends ThemeType {}
}