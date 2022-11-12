import { extendTheme } from 'native-base';

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: 'light',
};

// extend the theme
const theme = extendTheme({
  ...config,
  components: {
    Button: {
      defaultProps: {
        colorScheme: 'indigo',
        size: 'md',
        shadow: '3',
      },
    },
  },
});

type MyThemeType = typeof theme;

declare module 'native-base' {
  interface ICustomTheme extends MyThemeType {}
}

export default theme;
