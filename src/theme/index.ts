import { extendTheme } from 'native-base';

// Define the config
const config = {
  useSystemColorMode: true,
  initialColorMode: 'light',
};

// extend the theme
const theme = extendTheme({
  ...config,
  components: {
    Button: {
      baseStyle: {
        fontWeight: 'bold',
      },
      defaultProps: {
        colorScheme: 'indigo',
        size: 'md',
      },
    },
  },
});

type MyThemeType = typeof theme;

declare module 'native-base' {
  interface ICustomTheme extends MyThemeType {}
}

export default theme;
