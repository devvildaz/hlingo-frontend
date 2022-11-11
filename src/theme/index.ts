import { extendTheme } from "native-base";

// Define the config
const config = {
  useSystemColorMode: true,
  initialColorMode: "light",
};

// extend the theme
const theme = extendTheme({ config });

type MyThemeType = typeof theme;

declare module "native-base" {
  interface ICustomTheme extends MyThemeType {}
}

export default theme;
